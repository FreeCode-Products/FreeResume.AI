import { NextResponse ,NextRequest} from 'next/server';
import { storeUserInSupabase } from '../../services/authService';
import { verifyKeycloakToken } from '../../middleware/keycloak-middleware';

type ApiResponse = {
  details: string;
}

export async function POST(req: NextRequest ) {
  // Verify token
  const token = await verifyKeycloakToken(req);

  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  // Decode token & extract user details
  const userData = await req.json();
  const user = {
    user_id: userData.user_id,  // Keycloak User ID
    email: userData.email,
    full_name: userData.full_name || userData.email.split('@')[0],
  }; 

  try {
    const storedUser = await storeUserInSupabase(user);
    return NextResponse.json({ message: 'User authenticated', user: storedUser });
  } catch (error : any) {
    console.log(error)
    if(error) {
      // console.log(error?.details ?? "no details available")
      if(error?.code == "23505")
      return NextResponse.json({ message:"already available", user: user }, { status: 200 });
    } else{
      return NextResponse.json({  error: "This message is not Autheticated and comes from authController line 22" }, { status: 500 });
      
    }
  }
}
