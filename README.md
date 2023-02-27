## Common Helpers 🐜

Helper files to get tasks done quicker

- Generate README.md *--readme*
  - Creates a markdown file with links to major dependencies, basic local setup steps, and contributing info.

### Setup

1. [Clone the repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository?tool=webui)
   
```shell
git clone https://github.com/dejmedus/common-helpers.git
```
> ⚠️ The following assumes a MacOS/Linux system. Commands will differ slightly for Windows.

2. Open .zshrc/.bashrc file

```shell
open ~/.zshrc
or
open ~/.bashrc
```

3. Create common alias

```txt
alias common="node /path/to/common/common.js"
```

4. Save changes

```shell
source ~/.zshrc
or
source ~/.bashrc
```

5. Call common

```shell
common --help
common --readme
```