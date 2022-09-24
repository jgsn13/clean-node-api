import { LogControllerDecorator } from './log-controller.decorator';
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from '../../presentation/protocols';

interface SutTypes {
  sut: LogControllerDecorator;
  controllerStub: Controller;
}

const makeController = (): Controller => {
  /**
   * Controller Stub class
   */
  class ControllerStub implements Controller {
    /**
     * Handle the request body
     * @param {HttpRequest} httpRequest - http request
     * @return {Promise<HttpResponse>}
     */
    public async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
      const httpResponse: HttpResponse = {
        statusCode: 200,
        body: {
          name: 'any_name',
        },
      };
      return new Promise((resolve) => resolve(httpResponse));
    }
  }

  return new ControllerStub();
};

const makeSut = (): SutTypes => {
  const controllerStub = makeController();
  const sut = new LogControllerDecorator(controllerStub);

  return {
    sut,
    controllerStub,
  };
};

describe('LogController Decorator', () => {
  test('Should call controller handle', async () => {
    const { sut, controllerStub } = makeSut();
    const handleSpy = jest.spyOn(controllerStub, 'handle');
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'any_mail@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password',
      },
    };
    await sut.handle(httpRequest);
    expect(handleSpy).toHaveBeenCalledWith(httpRequest);
  });
});

