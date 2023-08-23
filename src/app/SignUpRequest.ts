export class SignUpRequest{
    name:string;
    password:string;
    email:string;
    role:Set<String>=new Set<String>("Mod,User");
    
}