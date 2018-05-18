export TERM="xterm-256color"
# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
  export ZSH=/home/malfaros/.oh-my-zsh

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
#POWERLEVEL9K_MODE='awesome-fontconfig'
POWERLEVEL9K_MODE='nerdfont-complete'
ZSH_THEME="powerlevel9k/powerlevel9k"
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=(status root_indicator background_jobs history time ram load)
POWERLEVEL9K_PROMPT_ON_NEWLINE=true
POWERLEVEL9K_RPROMPT_ON_NEWLINE=true

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
#plugins=(git)
plugins=(sudo git history taskwarrior zsh-autosuggestions zsh-syntax-highlighting)

source $ZSH/oh-my-zsh.sh
source ~/.fonts/*.sh
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/rsa_id"

# ALIAS FUNCTIONS
function git_diff() {
  if cmd_exist "git" "Use: $> ai git" ; then return 0 ; fi ;
  if [ $# -eq 0 ]
    then
      echo "use: $> $0 [path to file] [id-commit-1] [id-commit-2]"
    else
      git diff "$2:$1" "$3:$1"
  fi
}

function net_up_kqof_for_test() {
  mvn clean -o jetty:run-forked -P localDevelopment,maggie -Dlocal.compile.compass -Dforce.real=true
}

function net_test_record() {
  if cmd_exist "mvn" "Use: $> ai mvn" ; then return 0 ; fi ;
  if [ $# -eq 0 ]
    then
      echo "use: $> $0 @testName"
    else
      mvn verify -Duser.data=ei -Dmaggie.mode=RECORD -Dtags.filter="$1" -P develop -Dmaggie.start.timeout=120 -Dtake.screenshots=true -Dwebdriver.firefox.profile=default
  fi
}

function net_test_playback() {
  if cmd_exist "mvn" "Use: $> ai mvn" ; then return 0 ; fi ;
  if [ $# -eq 0 ]
    then
      echo "use: $> $0 @testName"
    else
      mvn verify -Duser.data=ei -Dmaggie.mode=PLAYBACK -Dtags.filter="$1" -P develop -Dwebdriver.firefox.profile=default
  fi
}

function net_test() {
  if cmd_exist "mvn" "Use: $> ai mvn" ; then return 0 ; fi ;
  if [ $# -eq 0 ]
    then
      echo "use: $> $0 @testName"
    else
      mvn verify -Duser.data=ei  -Dtags.filter="$1" -P develop -Dwebdriver.firefox.profile=default
  fi
}

function net_up_for_dbg_eclipse() {
  if cmd_exist "mvn" "Use: $> ai mvn" ; then return 0 ; fi ;
  if [ $# -eq 0 ]
    then
      echo "use: $> $0 @testName"
    else
      mvn clean verify -Duser.data=ei -Dtags.filter="$1" -P develop,failsafe-debug -Dwebdriver.firefox.profile=default
  fi
}

function cmd_exist() {
  if hash "$1" 2>/dev/null ;
    then
      return 1
    else
      echo "Command $1 no exists"
      echo "$2"
      return 0      
  fi
}

function cmp_files() {
  if cmd_exist "meld" "Use: $> ai meld" ; then return 0 ; fi ;
  if [ $# -eq 0 ]
    then
      echo "use: $> $0 file_A file_B"
    else
      meld "$1" "$2"
  fi
}


# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

alias ll='ls -lh'
alias la='ls -A'
alias l='ls -CF'
alias s='sudo'
alias smount='sudo mount'
alias sumount='sudo umount'
alias c='clear'
alias svim='sudo vim'
alias apagate='sudo shutdown -h now'
alias reiniciate='sudo reboot'
alias kk='sudo kill -KILL'
alias ss='ps -A|grep'
alias hgrep='history|grep'
alias version='lsb_release -da'
alias where='whereis'
alias snpm='sudo npm'
alias chrome='google-chrome-stable --disable-web-security --ignore-certificate-errors --user-data-dir="/tmp/"'
alias hwinfo='inxi -F -xx'
alias misalias='cat ~/.zshrc|grep ^alias'
alias ai='sudo aptitude install'
alias as='sudo aptitude search'
alias ap='sudo aptitude purge'
alias ass='sudo aptitude show'
alias au='sudo aptitude update'
alias auu='sudo aptitude safe-upgrade'
alias alias-help='cat ~/.bashrc|grep ^alias'
alias smem='ps aux --sort -rss'
alias smems='ps aux | sort -rn -k 5,6'
alias cmp='cmp_files'
alias compare='cmp_files'
alias edit='subl'

#NODE
alias fix-node-watch='echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p'

## GIT ALIAS
alias git-commits-local='git log @{u}..'
alias git-commit-list-files='git diff-tree --no-commit-id --name-only -r'
alias git-status-no-pom='git status|grep -v pom.xml'
alias git-status-excludes='git status|grep -v pom.xml|grep -v scss|grep -v png|grep -v jpg'
alias update-watch='touch $(git status -s|grep -v pom.xml|cut -c4-)'
alias git-repo-url='git config --get remote.origin.url'
alias git-ui='gitk'
alias git-diff='git_diff'

## JAVA ALIAS
alias java-ls="ps -o pid,user,cmd -C java | sed -e 's/\([0-9]\+ *[^ ]*\) *[^ ]* *\([^$]*\)/\1 \2/' -e 's/-c[^ ]* [^ ]* \|-[^ ]* //g'"

## NET ALIAS
alias net-up-for-test='net_up_kqof_for_test'
alias net-test='net_test'
alias net-test-playback='net_test_playback'
alias net-test-record='net_test_record'
alias net-up-for-dbg-eclipse='net_up_for_dbg_eclipse'

PATH="$HOME/bin:$HOME/.local/bin:$PATH"
export PATH="$HOME/.jenv/bin:$PATH"
eval "$(jenv init -)"

#export NVM_DIR="$HOME/.nvm"
#[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
#[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

export JAVA_HOME=/usr/lib/jvm/java-7-oracle
export PATH=$JAVA_HOME/bin:$PATH
