(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{383:function(e,v,a){"use strict";a.r(v);var _=a(42),t=Object(_.a)({},(function(){var e=this,v=e.$createElement,a=e._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),a("h2",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[e._v("#")]),e._v(" Dockerfile")]),e._v(" "),a("h3",{attrs:{id:"解析器指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析器指令"}},[e._v("#")]),e._v(" 解析器指令")]),e._v(" "),a("p",[a("code",[e._v("# directive=value")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("syntax")]),e._v(" "),a("ul",[a("li",[e._v("The syntax directive defines the location of the Dockerfile builder that is used for building the current Dockerfile.")]),e._v(" "),a("li",[a("code",[e._v("# syntax=docker/dockerfile:1.0.0-experimental")])])])]),e._v(" "),a("li",[a("code",[e._v("escape")]),e._v(" "),a("ul",[a("li",[e._v("The escape directive sets the character used to escape characters in a Dockerfile. If not specified, the default escape character is .")]),e._v(" "),a("li",[e._v("转义字符：The escape character is used both to escape characters in a line, and to escape a newline.")]),e._v(" "),a("li",[a("code",[e._v("# escape=\\ (backslash)")]),e._v(" or "),a("code",[e._v("# escape=")]),e._v(" (backtick)`")]),e._v(" "),a("li",[e._v("若未指定，默认转义字符是"),a("code",[e._v("\\")])])])])]),e._v(" "),a("h3",{attrs:{id:"dockerignore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerignore"}},[e._v("#")]),e._v(" .dockerignore")]),e._v(" "),a("ul",[a("li",[e._v("排除"),a("code",[e._v("ADD")]),e._v("、"),a("code",[e._v("COPY")]),e._v("中匹配的文件和目录")])]),e._v(" "),a("h3",{attrs:{id:"环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[e._v("#")]),e._v(" 环境变量")]),e._v(" "),a("h3",{attrs:{id:"from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[e._v("#")]),e._v(" From")]),e._v(" "),a("p",[a("code",[e._v("FROM [--platform=<platform>] <image> [AS <name>]")])]),e._v(" "),a("p",[a("code",[e._v("FROM [--platform=<platform>] <image>[:<tag>] [AS <name>]")])]),e._v(" "),a("p",[a("code",[e._v("FROM [--platform=<platform>] <image>[@<digest>] [AS <name>]")])]),e._v(" "),a("p",[e._v("初始化一个新的构建阶段并设置基础镜像")]),e._v(" "),a("h3",{attrs:{id:"arg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arg"}},[e._v("#")]),e._v(" ARG")]),e._v(" "),a("p",[a("code",[e._v("ARG")]),e._v("唯一可以在"),a("code",[e._v("From")]),e._v("之前的指令")]),e._v(" "),a("h3",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[e._v("#")]),e._v(" RUN")]),e._v(" "),a("p",[a("code",[e._v("RUN <command>")]),e._v("//shell 格式")]),e._v(" "),a("p",[a("code",[e._v('RUN ["executable", "param1", "param2"]')]),e._v("//exec 格式")]),e._v(" "),a("p",[a("code",[e._v("RUN")]),e._v("指令将在当前镜像顶部的新层上执行命令并提交这个结果")]),e._v(" "),a("h3",{attrs:{id:"label"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[e._v("#")]),e._v(" LABEL")]),e._v(" "),a("p",[a("code",[e._v("LABEL <key>=<value> <key>=<value> <key>=<value> ...")])]),e._v(" "),a("p",[a("code",[e._v("LABEL")]),e._v("指令给镜像添加元数据")]),e._v(" "),a("p",[e._v("减小最终镜像的大小")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('LABEL multi.label1="value1" multi.label2="value2" other="value3"\n')])])]),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('LABEL multi.label1="value1" \\\n      multi.label2="value2" \\\n      other="value3"\n')])])]),a("p",[e._v("镜像 继承基础镜像或父镜像的Labels")]),e._v(" "),a("p",[a("code",[e._v("docker inspect")]),e._v(" 查看镜像labels")]),e._v(" "),a("h3",{attrs:{id:"maintainer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maintainer"}},[e._v("#")]),e._v(" MAINTAINER")]),e._v(" "),a("p",[e._v("已废弃")]),e._v(" "),a("p",[e._v("设置作者字段，使用"),a("code",[e._v("LABEL")]),e._v("指令替代")]),e._v(" "),a("p",[a("code",[e._v('LABEL maintainer="SvenDowideit@home.org.au"')])]),e._v(" "),a("h3",{attrs:{id:"expose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expose"}},[e._v("#")]),e._v(" EXPOSE")]),e._v(" "),a("p",[a("code",[e._v("EXPOSE <port> [<port>/<protocol>...]")])]),e._v(" "),a("p",[e._v("通知Docker该容器运行时监听指定的网络端口。可以指定在TCP还是UDP协议上监听，默认TCP协议。")]),e._v(" "),a("p",[a("code",[e._v("EXPOSE")]),e._v("指令并不会发布端口，只是说明哪个端口打算被发布。想要实际发布端口，通过在"),a("code",[e._v("docker run")]),e._v("上"),a("code",[e._v("-p")]),e._v("标志来发布并映射一个或多个端口，"),a("code",[e._v("-P")]),e._v("标志发布所有EXPOSE的端口并映射到高阶端口。")]),e._v(" "),a("p",[a("code",[e._v("EXPOSE 80/udp")])]),e._v(" "),a("p",[e._v("同时"),a("code",[e._v("EXPOSE")]),e._v(" TCP和UDP")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("EXPOSE 80/tcp\nEXPOSE 80/udp\n")])])]),a("p",[a("code",[e._v("docker network")]),e._v("命令支持创建在容器之间通信的网络，不需要发布指定端口")]),e._v(" "),a("h3",{attrs:{id:"env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[e._v("#")]),e._v(" ENV")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ENV <key> <value>\nENV <key>=<value> ...\n")])])]),a("p",[e._v("设置环境变量")]),e._v(" "),a("p",[a("code",[e._v("<value>")]),e._v("将在构建阶段中所有后续指令的环境中使用")]),e._v(" "),a("p",[a("code",[e._v("ENV <key> <value>")]),e._v("在第一个空格后的所有字符作为"),a("code",[e._v("<value>")]),e._v("包括空格")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ENV myName John Doe\nENV myDog Rex The Dog\nENV myCat fluffy\n")])])]),a("p",[a("code",[e._v("ENV <key>=<value> ...")]),e._v("允许同时设置多个变量")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ENV myName="John Doe" myDog=Rex\\ The\\ Dog \\\n    myCat=fluffy\n')])])]),a("p",[e._v("容器运行时ENV设置的环境变量将被保留，通过"),a("code",[e._v("docker inspect")]),e._v("查看值，通过"),a("code",[e._v("docker run —env <key>=<value>")]),e._v("改变")]),e._v(" "),a("h3",{attrs:{id:"add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[e._v("#")]),e._v(" ADD")]),e._v(" "),a("p",[a("code",[e._v("ADD [--chown=<user>:<group>] <src>... <dest>")])]),e._v(" "),a("p",[a("code",[e._v('ADD [--chown=<user>:<group>] ["<src>",... "<dest>"]')]),e._v("有空格的路径需要此格式")]),e._v(" "),a("p",[a("code",[e._v("--chown")]),e._v("只被支持用于构建Linux容器")]),e._v(" "),a("p",[a("code",[e._v("ADD")]),e._v("指令拷贝来自"),a("code",[e._v("<src>")]),e._v("的文件、目录或远程文件URL并添加到镜像的文件系统的"),a("code",[e._v("<dest>")]),e._v("路径")]),e._v(" "),a("p",[e._v("可以指定多个"),a("code",[e._v("<src>")]),e._v("，如果它们是文件或目录，则它们的路径相对于构建上下文解析")]),e._v(" "),a("p",[e._v("可以包含通配符")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ADD hom* /mydir/        # adds all files starting with "hom"\nADD hom?.txt /mydir/    # ? is replaced with any single character, e.g., "home.txt"\n')])])]),a("p",[a("code",[e._v("<dest>")]),e._v("是绝对路径，或是相对于"),a("code",[e._v("WORKDIR")]),e._v("的路径")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ADD test relativeDir/          # adds "test" to `WORKDIR`/relativeDir/\nADD test /absoluteDir/         # adds "test" to /absoluteDir/\n')])])]),a("p",[e._v("添加包含特殊字符（例如"),a("code",[e._v("[")]),e._v("和"),a("code",[e._v("]")]),e._v("）的文件或目录时，您需要按照Golang规则转义那些路径，以防止将它们视为匹配模式")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ADD arr[[]0].txt /mydir/    # copy a file named "arr[0].txt" to /mydir/\n')])])]),a("p",[e._v("在"),a("code",[e._v("<src>")]),e._v("是远程"),a("code",[e._v("URL")]),e._v("的情况下，添加后的文件权限为600")]),e._v(" "),a("p",[a("code",[e._v("ADD")]),e._v("指令会令镜像构建缓存失效，从而可能会令镜像构建变得比较缓慢")]),e._v(" "),a("p",[a("code",[e._v("--chown=<user>:<group>")]),e._v("改变文件的所属用户及所属组")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ADD --chown=55:mygroup files* /somedir/\nADD --chown=bin files* /somedir/\nADD --chown=1 files* /somedir/\nADD --chown=10:11 files* /somedir/\n")])])]),a("p",[e._v("如果通过"),a("code",[e._v("STDIN")]),e._v("传入"),a("code",[e._v("Dockerfile")]),e._v("来构建"),a("code",[e._v("(docker build - < somefile)")]),e._v("，便没有构建上下文，"),a("code",[e._v("ADD")]),e._v("的只能是URL。如果通过"),a("code",[e._v("STDIN")]),e._v("传入压缩包"),a("code",[e._v("(docker build - < archive.tar.gz)")]),e._v("，压缩包根目录下的Dockerfile和其余部分将用作构建上下文")]),e._v(" "),a("p",[e._v("规则")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("<src>")]),e._v("路径必须在构建上下文内；不能"),a("code",[e._v("COPY ../something /something")]),e._v("，因为"),a("code",[e._v("docker build")]),e._v("的第一步是将上下文目录发送到docker daemon(守护程序)")]),e._v(" "),a("li",[e._v("如果"),a("code",[e._v("<src>")]),e._v("目录，目录下的所有内容都会被复制，包括文件的元数据（目录本身不会被复制，只有它的内容）")]),e._v(" "),a("li",[e._v("如果"),a("code",[e._v("<src>")]),e._v("是任何类型的文件，则会将其及其元数据一起复制。如果"),a("code",[e._v("<dest>")]),e._v("以"),a("code",[e._v("/")]),e._v("结束，它将被认为是一个目录，的内容将被写入到"),a("code",[e._v("<dest>/<src>")])]),e._v(" "),a("li",[e._v("如果直接或使用通配符指定了多个"),a("code",[e._v("<src>")]),e._v("，"),a("code",[e._v("<dest>")]),e._v("必须是目录且必须以"),a("code",[e._v("/")]),e._v("结束")]),e._v(" "),a("li",[e._v("如果"),a("code",[e._v("<dest>")]),e._v("没有以"),a("code",[e._v("/")]),e._v("结束，它将被视为常规文件，"),a("code",[e._v("<src>")]),e._v("里的内容将被写入"),a("code",[e._v("<dest>")])]),e._v(" "),a("li",[e._v("如果"),a("code",[e._v("<dest>")]),e._v("不存在，路径下所有不存在的路径都会被创建")]),e._v(" "),a("li",[e._v("如果"),a("code",[e._v("<src>")]),e._v("是一个"),a("code",[e._v("URL")]),e._v("，没有以"),a("code",[e._v("/")]),e._v("结束，文件被下载并复制到"),a("code",[e._v("<dest>")]),e._v("中")]),e._v(" "),a("li",[e._v("如果"),a("code",[e._v("<src>")]),e._v("是一个"),a("code",[e._v("URL")]),e._v("，"),a("code",[e._v("<dest>")]),e._v("以"),a("code",[e._v("/")]),e._v("结束，文件被下载到"),a("code",[e._v("<dest>/<filename>")]),e._v("，文件名从"),a("code",[e._v("URL")]),e._v("推断出")]),e._v(" "),a("li",[e._v("如果 "),a("code",[e._v("<src>")]),e._v(" 为一个 tar 压缩文件的话，压缩格式为 gzip, bzip2 以及 xz 的情况下，然后被解压为目录。来自URLs的压缩包不会被解压。当一个目录被复制或解压，行为与"),a("code",[e._v("tar -x")]),e._v("相同，会和"),a("code",[e._v("<dest>")]),e._v("路径下的内容合并")])]),e._v(" "),a("h3",{attrs:{id:"copy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[e._v("#")]),e._v(" COPY")]),e._v(" "),a("p",[a("code",[e._v("COPY [--chown=<user>:<group>] <src>... <dest>")])]),e._v(" "),a("p",[a("code",[e._v('COPY [--chown=<user>:<group>] ["<src>",... "<dest>"]')]),e._v(" 有空格的路径需要此格式")]),e._v(" "),a("p",[e._v("同"),a("code",[e._v("ADD")]),e._v("指令")]),e._v(" "),a("p",[e._v("与"),a("code",[e._v("ADD")]),e._v("区别")]),e._v(" "),a("ul",[a("li",[e._v("不能复制远程文件URL")])]),e._v(" "),a("p",[e._v("推荐使用"),a("code",[e._v("COPY")])]),e._v(" "),a("h3",{attrs:{id:"cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[e._v("#")]),e._v(" CMD")]),e._v(" "),a("p",[a("code",[e._v('CMD ["executable","param1","param2"]')]),e._v("//exec格式")]),e._v(" "),a("p",[a("code",[e._v('CMD ["param1","param2"]')]),e._v("//作为"),a("code",[e._v("ENTRYPOINT")]),e._v("默认参数")]),e._v(" "),a("p",[a("code",[e._v("CMD command param1 param2")]),e._v("//shell 格式")]),e._v(" "),a("p",[e._v("Dockerfile中只能有一个"),a("code",[e._v("CMD")]),e._v("指令")]),e._v(" "),a("p",[a("code",[e._v("CMD")]),e._v("主要目的是给容器在运行时指定默认的执行命令。默认的命令包含一个可执行程序，在指定"),a("code",[e._v("ENTRYPOINT")]),e._v("指令的情况下，"),a("code",[e._v("CMD")]),e._v("用于给"),a("code",[e._v("ENTRYPOINT")]),e._v("提供参数。")]),e._v(" "),a("blockquote",[a("p",[e._v("当"),a("code",[e._v("CMD")]),e._v("用于给"),a("code",[e._v("ENTRYPOINT")]),e._v("提供默认参数，"),a("code",[e._v("CMD")]),e._v("和"),a("code",[e._v("ENTRYPOINT")]),e._v("需要使用JSON数组格式来指定")]),e._v(" "),a("p",[a("em",[e._v("exec")]),e._v(" form 被解析为JSON数组，意味着必须使用双引号而不是单引号")]),e._v(" "),a("p",[e._v("与_shell_ form不同，"),a("em",[e._v("exec")]),e._v(" form不会调用命令_shell_。")])]),e._v(" "),a("p",[e._v("如果"),a("code",[e._v("CMD")]),e._v("使用_shell_ form，"),a("code",[e._v("<command>")]),e._v("将在"),a("code",[e._v("/bin/sh -c")]),e._v("中执行")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('FROM ubuntu\nCMD echo "This is a test." | wc -\n')])])]),a("p",[e._v("如果不想在_shell_中运行"),a("code",[e._v("<command>")]),e._v("，必须使用_exec_ form")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('FROM ubuntu\nCMD ["/usr/bin/wc","--help"]\n')])])]),a("blockquote",[a("p",[e._v("如果想每次容器运行相同的可执行文件，应该考虑使用"),a("code",[e._v("ENTRYPOINT")]),e._v("，如果"),a("code",[e._v("docker run")]),e._v("指定了参数，将覆盖"),a("code",[e._v("CMD")]),e._v("指定的默认值")])]),e._v(" "),a("h3",{attrs:{id:"entrypoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint"}},[e._v("#")]),e._v(" ENTRYPOINT")]),e._v(" "),a("p",[a("code",[e._v('ENTRYPOINT ["executable", "param1", "param2"]')]),e._v(" exec格式；推荐")]),e._v(" "),a("p",[a("code",[e._v("ENTRYPOINT command param1 param2")]),e._v("shell格式")]),e._v(" "),a("p",[a("code",[e._v("ENTRYPOINT")]),e._v("允许您配置容器作为可执行文件运行。")]),e._v(" "),a("p",[a("code",[e._v("docker run -i -t --rm -p 80:80 nginx")])]),e._v(" "),a("p",[a("code",[e._v("docker run <image>")]),e._v("的命令行参数将被附加到"),a("code",[e._v("ENTRYPOINT")]),e._v(" "),a("em",[e._v("exec")]),e._v(" form的所有元素之后并覆盖"),a("code",[e._v("CMD")]),e._v("指定的所有元素")]),e._v(" "),a("p",[a("em",[e._v("shell")]),e._v(" form的"),a("code",[e._v("ENTRYPOINT")]),e._v(" 将作为"),a("code",[e._v("/bin/sh -c")]),e._v("的子命令启动，该子命令不传递信号，意味着可执行程序将不是容器的"),a("code",[e._v("PID 1")]),e._v("且不会接收Unix信号，因此你的可执行程序将不会从"),a("code",[e._v("docker stop <container>")]),e._v("接收"),a("code",[e._v("SIGTERM")]),e._v("信号")]),e._v(" "),a("p",[e._v("为了确保"),a("code",[e._v("docker stop")]),e._v("正确的发送信号给"),a("code",[e._v("ENTRYPOINT")]),e._v("执行程序，需要用"),a("code",[e._v("exec")]),e._v("启动")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("FROM ubuntu\nENTRYPOINT exec top -b\n")])])]),a("h3",{attrs:{id:"volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volume"}},[e._v("#")]),e._v(" VOLUME")]),e._v(" "),a("p",[a("code",[e._v('VOLUME ["/data"]')])]),e._v(" "),a("p",[a("code",[e._v("VOLUME /var/log or VOLUME /var/log /var/db")]),e._v("//可指定多个参数")]),e._v(" "),a("p",[a("code",[e._v("VOLUMN")]),e._v("指令创建一个指定名字的挂载点并绑定到来自主机或其它容器的外部的卷中。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.docker.com/engine/tutorials/dockervolumes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("更多"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("code",[e._v("docker run")]),e._v("命令使用基础镜像内指定位置上任何数据来初始新创建的卷")]),e._v(" "),a("ul",[a("li",[e._v("基于windows的容器，容器内的volumn的目标必须是\n"),a("ul",[a("li",[e._v("一个不存在或空的目录")]),e._v(" "),a("li",[e._v("C以外的驱动器")])])]),e._v(" "),a("li",[e._v("在"),a("strong",[e._v("Dockerfile内，任何在声明了卷后更改的卷内的数据，都将被丢弃。")])]),e._v(" "),a("li",[a("code",[e._v('VOLUME ["/data"]')]),e._v("被解析为JSON数组，意味着必须使用双引号而不是单引号")]),e._v(" "),a("li",[e._v("主机目录（装载点）本质上是与主机相关的。这是为了保持映像可移植性，因为无法保证给定的主机目录在所有主机上都可用。因此，您无法从 Dockerfile 中装载主机目录。VOLUME 指令不支持指定"),a("code",[e._v("host-dir")]),e._v("参数。创建或运行容器时必须指定装载点。")])]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('FROM ubuntu\nRUN mkdir /myvol\nRUN echo "hello world" > /myvol/greeting\nVOLUME /myvol\n')])])]),a("h3",{attrs:{id:"user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[e._v("#")]),e._v(" USER")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("USER <user>[:<group>] or\nUSER <UID>[:<GID>]\n")])])]),a("p",[a("code",[e._v("USER")]),e._v("指令为后面的"),a("code",[e._v("RUN")]),e._v("、"),a("code",[e._v("CMD")]),e._v("、"),a("code",[e._v("ENTRYPOINT")]),e._v("命令设置执行这些命令的用户名(或UID)和可选的用户组(或GID)")]),e._v(" "),a("p",[e._v("当用户没有组时，镜像将运行在"),a("code",[e._v("root")]),e._v("组")]),e._v(" "),a("p",[e._v("Windows下，用户必须提前创建，可以在Dockerfile中使用"),a("code",[e._v("net user")]),e._v("命令")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("FROM microsoft/windowsservercore\n    # Create Windows user in the container\n    RUN net user /add patrick\n    # Set it for subsequent commands\n    USER patrick\n")])])]),a("h3",{attrs:{id:"workdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workdir"}},[e._v("#")]),e._v(" WORKDIR")]),e._v(" "),a("p",[a("code",[e._v("WORKDIR /path/to/workdir")])]),e._v(" "),a("p",[e._v("为后面的"),a("code",[e._v("RUN")]),e._v("、"),a("code",[e._v("CDM")]),e._v("、"),a("code",[e._v("ENTRYPOINT")]),e._v("命令设置工作目录。如果"),a("code",[e._v("WORKDIR")]),e._v("不存在，将会被创建尽管未使用")]),e._v(" "),a("p",[a("code",[e._v("WORKDIR")]),e._v("可以多次使用。如果是相对路径，将相对前面的"),a("code",[e._v("WORKDIR")]),e._v("命令指定的路径")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("WORKDIR /a\nWORKDIR b\nWORKDIR c\nRUN pwd\n")])])]),a("p",[a("code",[e._v("pwd")]),e._v("的输出是"),a("code",[e._v("/a/b/c")])]),e._v(" "),a("p",[a("code",[e._v("WORKDIR")]),e._v("可以解析"),a("code",[e._v("ENV")]),e._v("已设置的环境变量，只能使用在"),a("code",[e._v("Dockerfile")]),e._v("中显示设置的环境变量")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ENV DIRPATH /path\nWORKDIR $DIRPATH/$DIRNAME\nRUN pwd\n")])])]),a("p",[a("code",[e._v("pwd")]),e._v("的输出是"),a("code",[e._v("/path/$DIRNAME")])]),e._v(" "),a("h3",{attrs:{id:"arg-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arg-2"}},[e._v("#")]),e._v(" ARG")]),e._v(" "),a("p",[a("code",[e._v("ARG <name>[=<default value>]")])]),e._v(" "),a("p",[a("code",[e._v("ARG")]),e._v("命令定义一个变量，可以在构建时通过"),a("code",[e._v("docker build --build-arg <varname>=<value>")]),e._v("给这个变量传递值")]),e._v(" "),a("p",[e._v("不建议传递像github密钥，用户凭证等。使用"),a("code",[e._v("docker history")]),e._v("可以看到所有值")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("FROM busybox\nARG user1\nARG buildno\n...\n")])])]),a("p",[a("code",[e._v("ARG")]),e._v("可以包含一个默认值")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("FROM busybox\nARG user1=someuser\nARG buildno=1\n...\n")])])]),a("h3",{attrs:{id:"onbuild"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onbuild"}},[e._v("#")]),e._v(" ONBUILD")]),e._v(" "),a("h3",{attrs:{id:"stopsignal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stopsignal"}},[e._v("#")]),e._v(" STOPSIGNAL")]),e._v(" "),a("h3",{attrs:{id:"shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell"}},[e._v("#")]),e._v(" SHELL")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# syntax=docker/dockerfile:1.0 \n\nFrom\n")])])]),a("p",[a("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact",target:"_blank",rel:"noopener noreferrer"}},[e._v("源文档"),a("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=t.exports}}]);