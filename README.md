# Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

# Getting Started
1. Using Docker
```
docker build -t dwn-aggregator .
docker container run --init --rm --name dwn-aggregator -p 3000:3000 dwn-aggregator
```

2. Running locally
```
npm install
node src/index.js
ngrok http 3000
```

3. System dependencies

This build depends on the [`g++`](https://man7.org/linux/man-pages/man1/g++.1.html) compiler, GNU's C++ compiler impl. When not available on the system, you may find in your error logs:

```
npm ERR! make: g++: No such file or directory
```

To fix, ensure `g++` is available on your system:

### MacOS
Install [Xcode Command Line tools](https://mac.install.guide/commandlinetools/4.html).

### Linux

#### Fedora / RHEL
`sudo dnf install -y g++`

For other platforms, use your appropriate repository manager, for instance `yum`, `apt-get`, or `deb`.

### Windows

In Windows Subsystem for Linux (WSL): `sudo apt-get install build-essential gdb`. (Untested; please open issue or PR to validate/correct and update this documentation!)

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)