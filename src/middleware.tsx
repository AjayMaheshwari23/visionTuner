// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//     const path = request.nextUrl.pathname;

//     const isPublicPath = path === "./pages/Components/login" || path === './pages/Components/register';
//     const token = request.cookies.get('token')?.value || "";

//     console.log(isPublicPath,token);    

//     if(isPublicPath && token){
//         return NextResponse.redirect(new URL(`${path}`, request.nextUrl));
//     }

//     if(!isPublicPath && token){
//         return NextResponse.redirect(new URL("./pages/Components/login",request.nextUrl));
//     }
// }
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ['/','./pages/Components/login','./pages/Components/register','./pages/Components/profile'],
// }