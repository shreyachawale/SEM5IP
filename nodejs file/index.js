const fs = require("fs");

// 1) READ FILE SYNC AND ASYNC
const rf = fs.readFileSync("test.txt", "utf-8"); // sync function (blocking code)
console.log(rf);

fs.readFile("contacts.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

// 2) WRITE FILE SYNC AND ASYNC
fs.writeFileSync("ippracs.txt", "Tomorrow is my IP pracs....");
const wf = fs.writeFile("ipprac.txt", "I am Here...", (err) => {
  if (err) {
    console.error("Error", err);
  } else {
    console.log("wrote successfully");
  }
});

// 3) REMOVE/UNLINK FILE SYNC AND ASYNC
try {
  fs.unlinkSync("shreya.txt"); // sync function ()
  console.log("removed successfully");
} catch (error) {
  console.log("not removed successfully");
}

fs.unlink("test.txt", (err) => {
  if (err) {
    console.error("Error removing file:", err);
  } else {
    console.log("File successfully removed");
  }
});

// 4) APPEND FILE SYNC AND ASYNC
fs.appendFileSync("ipprac.txt", "This is appended text..");
fs.appendFile("ipprac.txt", "This is async appended text\n", (err) => {
  if (err) console.log(err);
  else console.log("appended successfully");
});

// RENAME FILE SYNC AND ASYNC
try {
  fs.renameSync("test.txt", "ip.txt");
} catch (error) {
  console.log(error);
}

fs.rename("ip.txt", "test.txt", (err) => {
  if (err) console.log(err);
  else console.log("name changed");
});

// mkdir FILE SYNC AND ASYNC
try {
  fs.mkdirSync("new-folder");
} catch (error) {
  console.log(error);
}

fs.mkdir("new-fol-1", (err) => {
  if (err) console.log(err);
  else console.log("folder created");
});

console.log(
  "This log runs immediately after the unlink call, not waiting for the file deletion."
);