---
layout: post
title: iTerm2 + Zsh + Oh-my-zsh on mac
subtitle: Power up your shell
date: '2019-11-23T07:29:49.116Z'
categories: ["terminal"]
keywords: ["zsh", "oh-my-zsh", "shell", "terminal"]
permalink: /iterm2-zsh-oh-my-zsh-on-mac
---

Terminal has been always been a place where most developers love to dwell. Different themes along with plugins now make this dwelling fancier. Let’s see some recipes to make our beloved terminal look _sweeeet._ I will walk you through the usage of iTerm2 and ZSH in this short blog. We will also explore a few themes and plugins towards the end.

### **Getting started**

**Install Homebrew (If you don’t have it already 😉)**

```shell
/usr/bin/ruby -e "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/master/install](https://raw.githubusercontent.com/Homebrew/install/master/install))"
```

**Install iTerm2**
```shell
brew cask install iterm2               
```

**Install ZSH**
```shell
brew install zsh
```

**Install Oh-my-zsh**
```shell
sh -c "$(curl -fsSL [https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh](https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh))"
```

The final steps of Oh-my-zsh installation asks the user if zsh should be made the default shell. You should respond in the affirmative. In any case, if the default shell is not changed, run the below command to change the default shell to Zsh.

```shell
chsh -s /bin/zsh
```

### Customising iTerm2

### **Themes**

**OMZ(Oh-my-zsh) pre-downloaded themes**

OMZ comes with a bunch of themes that you can use to make your terminal look sophisticated. All the pre-downloaded themes are present in `~/.oh-my-zsh/themes` directory. The theme files in this directory have an extension of `.zsh-theme`. If you want to use the `linuxonly.zsh-theme`, go ahead and modify the following entry in ~/.zshrc file -
```shell
ZSH_THEME="linuxonly"
```

By default, the theme is set to “robbyrussell”(named after the creator of Oh-my-zsh). Relaunch iTerm2 to see the changed theme. You can also manually force a refresh in the current terminal window by executing the below command -
```shell
source ~/.zshrc
```

**External themes**

Those are the themes which are not pre-bundled with OMZ. Such themes can be found [here](https://github.com/robbyrussell/oh-my-zsh/wiki/External-themes). I personally like the [powerlevel9k](https://github.com/robbyrussell/oh-my-zsh/wiki/External-themes#powerlevel9k) theme. Follow the below steps if you want to use the same

```shell
git clone https://github.com/bhilburn/powerlevel9k.git ~/.oh-my-zsh/custom/themes/powerlevel9k
```

Modify the ZSH_THEME entry in ~/.zshrc file as shown below -
```shell
ZSH_THEME="powerlevel9k/powerlevel9k"
```
Reopen iTerm2 and you should be able to see the new theme.
{% include image.html name="p9k_zsh_theme.png"%}

We see some unknown characters represented with `?` on the window shown above. This can be fixed by installing the appropriate font.
```shell
brew tap homebrew/cask-fonts
```

```shell
brew cask install homebrew/cask-fonts/font-hack-nerd-font
```

Post-installation of font, configure iTerm2 to use the installed font by navigating to iTerm2 Preferences -> Profiles -> Text -> Now change Font to Hack Nerd Font (Screenshot below )

![]({{site.baseurl}}/assets/img/iterm_perferences.png)

Restart your terminal and now the absurd `?` should be gone. This is all about themes. Go crazy with theme testing.

### Plugins

**OMZ pre-downloaded plugins**

Very similar to themes, OMZ comes with a handful of pre-downloaded plugins which can be found in `~/.oh-my-zsh/plugins/` directory. To use the plugins, find the plugins entry in ~/.zshrc. You might see that “git” plugin is already added. The entry will look like below

```shell
plugins=(git)
```

The git plugin configures handy aliases for git operations. Find all the aliases that comes with this plugin [here](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/git).

There is another plugin named “z” which makes navigation across directories in terminal easier. For those who have used autojump, it’s something very similar. Using z allows you to navigate to the _frecent_(**fre**quent + re**cent**) directory. Find more information [here](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/z). In order to use z, just add z to the plugins entry in ~/.zshrc like shown below

```shell
plugins=(git z)
```

Save the changes and either reopen the terminal or load it using the `source` command discussed earlier. In order for z to work, cd to a directory(so that z could start reading your history of directories navigated using`cd`) and then use z to navigate to the same directory using regex. Refer the screenshot below —

![]({{site.baseurl}}/assets/img/z_plugin.png)

**External plugins**

Very similar to external themes, these are the plugins which don’t come along with OMZ default distribution. You can find those [here](https://github.com/ohmyzsh/ohmyzsh/wiki/External-plugins). Let’s see how to use one of my favourite external plugin s— [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions).

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

Append this plugin to the plugins entry in ~/.zshrc

```shell
plugins=(git z zsh-autosuggestions)
```

Restart iTerm2 and relish the beautiful suggestions work (Screenshot below)

![]({{site.baseurl}}/assets/img/autocomplete.png)

That’s it for this blog. Enjoy Z-shell!

**References**

[https://gist.github.com/dogrocker/1efb8fd9427779c827058f873b94df95](https://gist.github.com/dogrocker/1efb8fd9427779c827058f873b94df95)

[https://www.freecodecamp.org/news/how-to-configure-your-macos-terminal-with-zsh-like-a-pro-c0ab3f3c1156/](https://www.freecodecamp.org/news/how-to-configure-your-macos-terminal-with-zsh-like-a-pro-c0ab3f3c1156/)