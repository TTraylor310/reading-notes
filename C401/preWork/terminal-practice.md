# Practice in the terminal

### General Notes

1. The Command Line - What is it, how does it work and how do I get to one.
    * this is the basic of prompts for the computer and program to take an input

2. Basic Navigation - An introduction to the Linux directory system and how to get around it.
    * good overview, reminds me of DOS from my childhood. I didn't know much about it then, but some of the basic structure is the same and feels familiar

3. More About Files - Find out some interesting characteristics of files and directories in a Linux environment.
    * everything in linux is file and can be moved or accessed as one. things are case-sensitive and must be specific about the path that file is in

4. Manual Pages - Learn how to make the most of the Linux commands you are learning.
    * `man ls` will bring up list of the manual of that command explain what it does.
    * can search through with `man -k <search>`

5. File Manipulation - How to make, remove, rename, copy and move files and directories.
    * `mkdir blah` - makes 'blah' dir
    * `rmdir blah` - deletes 'blah' dir
    * `touch example1` - creates file 'example1'
    * `cp [options]<source><destination>` - copying file or directory
    * `mv [options]<source><destination>` - moving file or directory

6. Cheat Sheet - A quick reference for the main points covered in this tutorial.
    * ![Cheat Sheet Link](https://ryanstutorials.net/linuxtutorial/cheatsheet.php)

#### Randoms

* bash = "Bourne again shell"
* /etc - Stores config files for the system.
* /var/log - Stores log files for various system programs. (You may not have permission to look at everything in this directory. Don't let that stop you exploring though. A few error messages never hurt anyone.)
* /bin - The location of several commonly used programs (some of which we will learn about in the rest of this tutorial.
* /usr/bin - Another location for programs on the system.
