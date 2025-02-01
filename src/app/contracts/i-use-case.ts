interface IUseCase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  execute(...params: any): Promise<any>;
}

export default IUseCase;
