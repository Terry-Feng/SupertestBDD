export class UserPlayload{
    private static DEFAULT_PWD: string = 'defaultPwd';

    static resigterPlayload(email: string, password?: string) {
        return {
            email: email,
            password: password ? password : this.DEFAULT_PWD
        }
    }
}