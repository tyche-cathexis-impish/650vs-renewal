import { google } from 'googleapis';

// GA4 Property ID (環境変数から取得)
const GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID;

// サービスアカウント認証情報
const CREDENTIALS = process.env.GOOGLE_SERVICE_ACCOUNT_KEY 
  ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY)
  : null;

interface PageViewData {
  path: string;
  views: number;
}

/**
 * Google Analytics Data API v1を使用してページビューデータを取得
 */
export async function getPopularPosts(): Promise<PageViewData[]> {
  try {
    if (!GA4_PROPERTY_ID || !CREDENTIALS) {
      console.warn('GA4 credentials not configured, falling back to default behavior');
      return [];
    }

    // JWT認証でGoogle API クライアントを初期化
    const auth = new google.auth.GoogleAuth({
      credentials: CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
    });

    const analyticsdata = google.analyticsdata('v1beta');
    
    // 過去30日間のページビューデータを取得
    const response = await analyticsdata.properties.runReport({
      auth,
      property: `properties/${GA4_PROPERTY_ID}`,
      requestBody: {
        dateRanges: [
          {
            startDate: '30daysAgo',
            endDate: 'today',
          },
        ],
        dimensions: [
          {
            name: 'pagePath',
          },
        ],
        metrics: [
          {
            name: 'screenPageViews',
          },
        ],
        dimensionFilter: {
          filter: {
            fieldName: 'pagePath',
            stringFilter: {
              matchType: 'CONTAINS',
              value: '/blog/',
            },
          },
        },
        orderBys: [
          {
            metric: {
              metricName: 'screenPageViews',
            },
            desc: true,
          },
        ],
        limit: 10, // 上位10件を取得
      },
    });

    const rows = response.data.rows || [];
    
    return rows.map(row => ({
      path: row.dimensionValues?.[0]?.value || '',
      views: parseInt(row.metricValues?.[0]?.value || '0', 10),
    }));

  } catch (error) {
    console.error('Error fetching Google Analytics data:', error);
    return [];
  }
}

/**
 * パスからブログスラッグを抽出
 */
export function extractBlogSlugFromPath(path: string): string | null {
  const match = path.match(/\/blog\/([^\/]+)/);
  return match ? match[1] : null;
}