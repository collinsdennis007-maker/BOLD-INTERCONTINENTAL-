import { router, json, requireAuth } from '@appdeploy/sdk';

export const handler = router({
  'GET /api/_healthcheck': [async () => json({ message: 'BOLD backend online' })],
  'GET /api/account': [requireAuth(), async (ctx) => json({ userId: ctx.user!.userId, name: ctx.user!.name, email: ctx.user!.email })],
  'GET /api/profile': [async ({ body }) => json({ profile: body || null })],
  'GET /api/dashboard': [async () => json({
    balance: 25480,
    currency: 'USD',
    transactions: [
      { name: 'Payment received', amount: 1200 },
      { name: 'Card purchase', amount: -85 }
    ]
  })],
  'POST /api/transfers': [async ({ body }) => {
    const transfer = body || {};
    return json({ success: true, status: 'completed', transfer });
  }]
});
