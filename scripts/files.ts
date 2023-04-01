import fs from "fs";
import path from "path";

const folderList: string[] = [];
function output(folderPaths: string[]) {
  folderPaths.forEach(folderPath => {
    const results = fs.readdirSync(folderPath);
    const folders = results.filter((res: any) => fs.lstatSync(path.resolve(folderPath, res)).isDirectory());
    const innerFolderPaths = folders.map((folder: any) => path.resolve(folderPath, folder));
    if(innerFolderPaths.length === 0) {
      return;
    };
    innerFolderPaths.forEach((innerFolderPath: string) => {
      fs.readdirSync(innerFolderPath).forEach((file: string) => {
        if (file.split('.')[1] === 'json') {
          fs.rename(`${innerFolderPath}/${file}`, `./src/abi/${file}`, function (err: any) {
            if (err) {
              throw err;
            }
          })
        }
      });
      folderList.push(innerFolderPath)
    });
    output(innerFolderPaths);
  });
}

output([path.resolve(__dirname, "../artifacts/contracts")]);