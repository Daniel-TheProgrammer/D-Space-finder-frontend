import from '../model/Model'




export class AuthService {

    public async login(username: string, password: string):Promise<User | undefined> {
         if (username === 'user' && password === '1234'){
             return{
                userName: username
                email: 'someone@gmail.com'
             }
         }else {
             return undefined
         }
    }
}