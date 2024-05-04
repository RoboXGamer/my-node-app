declare namespace NodeJS {
  interface ProcessEnv {
    TEST_VALUE: string | undefined;
  }
}

function test(): void{
  console.log(process.env.TEST_VALUE);
  console.log("Added!")
  console.log("Added! 2")
  console.log("Added! 3")
  console.log("Added! 4")
}
test()