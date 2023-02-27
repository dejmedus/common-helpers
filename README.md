## Common Helpers 🐜

Helper files to get tasks done quicker

### Available Files

Generate README.md *--readme*
- Creates a markdown file with links to major dependencies, basic local setup steps, and contributing info.
  
<details>
<summary>View Example</summary>
<img width="613" alt="generated-readme-example" src="https://user-images.githubusercontent.com/59973863/221714684-50537836-9cb0-4359-8b3a-74256da58f47.png">
</details>

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
