export function dashboard(req, res) {
  return res.status(200).json({
    message: `Bem-vindo, ${req.user.name}.`,
    metrics: {
      openOperations: 0,
      pendingAlerts: 0,
      lastAccess: new Date().toISOString()
    }
  });
}
