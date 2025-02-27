import { NextRequest, NextResponse } from 'next/server';

export async function verifyKeycloakToken(req: NextRequest) {
  const authHeader = req.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const token = authHeader.split(' ')[1];
  const keycloakIssuer = process.env.KEYCLOAK_ISSUER_URL; // e.g. https://your-keycloak.com/auth/realms/your-realm
  const jwksUrl = `${keycloakIssuer}/protocol/openid-connect/certs`;

  try {
    const response = await fetch(jwksUrl);
    const { keys } = await response.json();
    // JWT verification logic (e.g., using jose library)
    return token; // If valid
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
  }
}


