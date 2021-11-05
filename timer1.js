
const args = process.argv;

for (const el of args) {
  
  setTimeout(() => {
    process.stdout.write(".");
  }, el * 1000) 
 
}