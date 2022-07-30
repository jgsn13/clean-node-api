/**
 * SignUp controller class
 */
export class SignUpController {
  /**
   * Handle the request body
   * @param {any} httpRequest - http signup request
   * @return {any}
   */
  public handle(httpRequest: any): any {
    console.log(httpRequest);
    return {
      statusCode: 400,
      body: new Error('Missing param: name'),
    };
  }
}
