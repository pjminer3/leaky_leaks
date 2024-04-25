function generateEmailAddresses(names: string[][], domain: string): string[] {
  const emailNames = new Set();
  const solution: string[] = [];

  for (let [firstname, lastname] of names) {
    let emailName = `${firstname.toLocaleLowerCase()}${lastname.toLocaleLowerCase()}`;

    while (emailNames.has(emailName)) {
      emailName = emailName + "xo";
    }

    emailNames.add(emailName);
    solution.push(`${emailName}@${domain}`);
  }

  return solution;
}