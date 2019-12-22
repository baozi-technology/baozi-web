---
title: "FLOSS Business & Ethics: Part 3 - Business models"
cover: "../../static/images/gpl-logo.png"
date: "23-11-2019"
author: "Nicolas Gimenez"
category: "floss"
tags:
    - open-source
    - free software
    - business of floss
    - philosophy
    - ethics
    - must read
---
 
In this episode, we try to answer this question: "How do we financially sustain the developement of a FLOSS, while sticking with our ethical values?"
We will see the advantages and drawbacks of each approach, and observe real-life examples. If you are unconfortable with the notions of open-source, free software and the different software licenses, read the [first part of this serie](https://baozi.technology/floss-business-ethics-part-1-definitions-and-context)! For my thoughts on the ethical stance of both movements, check out the [second part of this serie](https://baozi.technology/floss-business-ethics-part-2-thoughts-on-the-meaning-and-purpose-of-the-floss-movement).

We must distinguish different sort of softwares. On one side, softwares that constitute a finished work that is distributed to a client as is, and on the other side, software that are unfinished work and are aimed to be combined by another developer with another piece of code to make a standalone software that an end-user may want to use. In short, we have to distinguish a standalone software (like OpenOffice.org) from a software library (like [ZeroMQ](https://zeromq.org/)).

Aside from these considerations, we also have to distinguish softwares designed for being hosted on the web (be it on the client or the server side - both also have their particularities) from softwares designed to be physically distributed to a user in a traditional fashion.

Contrary to the popular belief, business models matter so much for the health of the project. The choice of software licenses are key to a successful business model, and as such, it must be thought ahead as taking back rights given by a license on a work done retroactically is not possible. How many technically successful projects have been abandonned because the [maintainers couldn't find time to work on the project anymore](https://www.codeshelter.co/)? If they had had funds they could have given up their daily jobs and work on it fulltime.
Even companies which engaged into raising money from venture capitalists sometimes revealed not to succeed financially despite the success of their product. A good example of that is [Docker](https://www.zdnet.com/article/docker-is-in-deep-trouble/).

There are plenty of initiatives these days to pay the open-source developers, namely [GitHub Sponsoring system](https://github.com/sponsors), [Patreon pages](https://www.patreon.com/), [RedHat Tidelift](https://blog.tidelift.com/open-source-creators-red-hat-got-34-billion-and-you-got-0.-heres-why)... It proves the importance of paying FLOSS contributors.

We'll see which are the business models available while giving you my two cents along the way.

# Selling the software as is

Free standalone Softwares may be sold the same way as proprietary softwares. As said earlier [nothing forbid it](https://www.gnu.org/philosophy/selling.en.html). And in fact, Free Softwares are and have always been sold the same way as proprietary softwares. Ex: copies of the GNU Emacs back at the time was [sold by Richard Stallman](https://www.oreilly.com/openbook/opensources/book/stallman.html). More recently, the WordPress plugin are all released under the GPL and are still distributed against a price. The source code is available but it doesn't mean that the service around providing binaries, installation packages and such are to be given away for free.

With GNU Emacs, we took the examples of softwares developers tools distributed at a time when barely 10% of the global population had access to a very slow internet. Today everyone can download it for free on the Internet. Furthermore, even if you'd lock Emacs so that people could try the software using a free trial before buying, someone could study the source code and release another version without the lock for free on the Internet. Therefore, it is in practice difficult to enforce a payment after a free trial of a standalone Free Software. All this is legal and encouraged by the FSF.

However, softwares usually come with logos and designs that are often protected under the trademarks laws. Therefore, one who engages into modifying a software and providing it without the "lock" doesn't have the right to do so using the logos and designs of the original software without the written permission of the copyright holders.

Replacing the logos and designs may be an easy task but it diminishes the credibility of the modified work for the customers that see in the original work the insurance that it is not a crack. The power of branding!

Finally, end-users that are non technologists do not care about software licenses. They do not know anything about it. If you tell them to pay to use the software, they'll just do it. But they might feel betrayed if you didn't tell them that there were a way around payment ;).

Generally, this strategy does not work if the software is 100% free (as in freedom). It works way better when at least a tiny part of your software is proprietary.

One counter-example could the so-called ["premium" WordPress plugins](https://www.wpstuffs.com/3-best-places-buy-premium-wordpress-plugins/) which are free softwares (licensed under the GNU GPL), but the service of bundling the binaries together and providing the service to download and install those plugins comes with a price.

# Support, training and donations

Most people distribute FLOSS (library or standalone software) for free (without a price tag), and make end-users pay for advanced support, specific training or simply ask for generous donations.

If the software is aimed to be used as a standalone software without modification by end-users as opposed to a software library, the main interest of the license business-wise is to enforce sharing improvements. Therefore, you'd rather use a strong copyleft license - like GNU GPL for such products. Ex:
- the GNU projects
- Linux
- [WordPress](https://developer.wordpress.org/themes/getting-started/wordpress-licensing-the-gpl/)
- [Blender](https://www.blender.org/about/license/)

For a software library, that is aimed to be combined by other developers to other piece of code to be useful, using a permissive license can be interesting because:
- they diminish the frictions for using the software so that more people can use it
- they look cool to the young kids of today (which are potential customers or contributors)
- they allow the original software developers to both accept contributions and make proprietary add-ons on top which may reasure the investors behind the project ;).

Ex of people adopting a permissive license + the support model: [Quasar Framework](https://quasar.dev/), [Cowboy and Nine Nines](https://ninenines.eu/).

Some of them prefer using a weak copyleft license for libraries: 
- VLC core library which recently [moved away from GPL to LGPL](https://www.videolan.org/press/lgpl-libvlc.html)
- ZeroMQ which [uses LGPLv3+static exception and is moving towards MPLv2](http://wiki.zeromq.org/area:licensing)

It really depends on their goals:
- are you pursing the Free Software spirit or the Open-Source ideology? ==> go for copyleft for the former
- do you want to enforce sharing of improvements, avoid being captured by a proprietary/free project, and eventually make it easier to create a real community around your project as it feels safer to contribute? ==> go for copyleft
- do you prefer making sure everyone can use your project by facilitating the usage of your library into a proprietary/free project? You don't care so much about creating a community, you can hire your own people? => go for a permissive license

It must be noted that if somebody forks your permissive project and make it GPL, you will NOT be able to pull back the improvements to your permissive project using your permissive license. You will need to change your license to GPL. That's one of the reason why permissive license advocates often HATE copyleft users. They consider that GPL-like licenses are viral and polluting.
It's a risk and this reason alone is enough to advice any one of you wanting to engage into making a significant open-source library with a permissive license to choose a weak copyleft license like the MPLv2 instead, especially if you are a small startup or an individual.
Pieter Hintjens talked about it better than me [on his blog](http://hintjens.com/blog:27). 

Martin Sústrik, ZeroMQ co-founder that forked the LGPL project to create Crossroad I/O, famously [disagreed with the use of a copyleft license in ZeroMQ](http://250bpm.com/blog:7). He explains [why he is a permissive license supporter on his blog](http://250bpm.com/blog:15).

As a tolerant Free Software advocate, I'd recommend anyone that is forking a permissive library to a copyleft-licensed repository to be a good OSS citizen: if you can, push your changes relevant to the original work to their original repository with their own permissive license. It's just better not to piss off people you're working with - be a gentleman and don't impose your views on people ;).

Interestingly, the two projects of Martin Sústrik, Crossroad I/O and nanomsg did not have the same sort of success, and did not gather as much a whole commnity as ZeroMQ did. Maybe the use of the ["benevolent dictator" model](https://lwn.net/Articles/488732/) for handling his community over the innovative de-centralized [C4 contribution policy](https://rfc.zeromq.org/spec:22/C4/) of ZeroMQ can explain it. Or maybe the choice of license? It is hard to say.

At this game of selling support and training, it mostly doesn't work for individual developers and small companies. RedHat is the real winner here. The land page for their [Tidelift project talks about it better than anyone](https://blog.tidelift.com/open-source-creators-red-hat-got-34-billion-and-you-got-0.-heres-why). It is the sad truth, companies doesn't want to bother with a thousands of different support contract for thousands of different software modules - and as RedHat says: _"Open source creators: RedHat got $34 billions of you got $0."_. Individual or small group of developers are no lawyers and salesmen, and that's what it takes for companies to sign legal and technical support deals.

The amount of money received from donations for small projects are usually only enough to pay the founder/core maintainers of the project. Anyone else contributing, even significantly is not paid at all. The most successful open-source software working with that model is Linux: [the main guy beeing paid is Linus Torvald + the other employees of the Linux Foundation + the employees of RedHat/Microsoft/IBM and equivalent that work on it as part of their employement contract](https://www.quora.com/Do-Linux-developers-get-paid-If-so-is-it-on-par-with-the-pay-that-software-professionals-are-paid).

Quasar Framework makes relatively good money that goes almost entirely to the core maintainer/project founder (and almost only contributor in terms of number of commits), [Razvan Stoenescu](https://quasar.dev/sponsors-and-backers).

Loïc Hoguin, creator of the Erlang's Cowboy library (and others) is responsible for over 90% of the commits to his projects, while his work is used by thousands of companies out there. Still, if you look at [his sponsor page](https://ninenines.eu/services/#_sponsoring), it does not seem that impressive when compared to the greatness of his work and he seems to admittedly still have to accept consulting contract.
It shows both how hard it is to create a community around FLOSS, independently of the success of your project, and how hard it is to get a competitive salary for it.

This [interview with the VIM creator Bram Moolenar](https://www.binpress.com/vim-creator-bram-moolenaar-interview/) is symptomatic. When asked "How can the community ensure that the Vim project succeeds for the foreseeable future?", he answered: "Keep me alive".
Often times, when a project like this becomes successful, the maintainer is hired by a well-established company to work on the project. [Bran Moolenar](https://www.vim.org/sponsor/index.php) works at Google.

How can one possibly create a real community around that? What happens when the main project maintainers can no longer contribute to the project? That seems quite scary for the users that rely on such library... Thus, the necessity of creating a real community - and somehow finding a way to get them paid, to some extent like with Linux.

An exception is MaterialUI which [makes it very clear where the money goes and seems to split it to many contributors](https://material-ui.com/discover-more/backers/).

Still, it is difficult to pay _everyone_ a competitive salary. One of the MaterialUI core maintainer, [Olivier Tassinari, acnowledges that and as a result is part of the RedHat Tidelift subscription](https://tidelift.com/subscription/pkg/npm-material-ui).
In general, FLOSS are a lot more complicated and complex than proprietary softwares, and thus, such developers would be paid quite a lot if it was in the corporate world.

Another problem with relying solely on support (and to some extent, training) is that the more your software is great, the more the documentation is great the less people will need your training/support and therefore it creates an unhealthy paradoxical vicious loop: the more you get money, the more you can improve your product and the less you will get money...

# Open-core

The fundamental idea is: the core of the product is open-source, but more advanced, "entreprise-grade" features is proprietary pay-to-use software.

An example can be JetBrains IDE products and their freemium business model. A free open-source "community edition" licensed under a permissive Apache 2 License and an "Enterprise" proprietary paid version.

One other alternative is having a core product and have another software like a GUI to make better use of the core product on the side that's a proprietary pay-to-use software. A bit like GitHub with Git (even though that's also a SaaS - see later)

The FSF considers any of this behaviour harmful to the cause of the Free Software, obviously, even though they do [allow it through their LGPL](https://www.gnu.org/licenses/why-not-lgpl.en.html).

I think it is a practical approach from prorietary vendors (JetBrains IntelliJ was originally a proprietary closed-source software) to market their products but there is nothing close to the idea of collaboration to make a better system.

JetBrains product are 99% maintained by JetBrains employees, even though they have released part of their functionality under a permissive license.

Ethically speaking it is really odd to choose between which feature should be part of the "Community" edition and which one should be part of the "Proprietary" Edition. It can be really cumbersome to handle and confusing for the users.

This sort of business model is not really possible if you don't go find business angels to raise funds for your project and hire a bunch of developers. Why? Who will want to contribute to a FLOSS when the owners make proprietary/closed-source adds-on on top of it?

A counter-example could be [GitLab](https://about.gitlab.com/pricing/licensing-faq/), an open-core alternative to GitHub that is [relatively well supported by the Free Software community](https://about.gitlab.com/blog/2015/05/20/gitlab-gitorious-free-software/). It seems like the [Debian community is contributing to the Community Edition of GitLab](https://about.gitlab.com/blog/2017/11/01/gitlab-switches-to-dco-license/).

# SaaS

SaaS stands out for Software as a Service and is a practice of hosting a Software behind a Web Server for a user for a fee.
The Free Software Foundation does not recommend anyone to use a SaaS because [they take away fundamental freedoms from the users](https://www.gnu.org/philosophy/who-does-that-server-really-serve.en.html).

That being said, it is a common and pretty profitable business model these days - if not the most. It's also a huge convenience for the user and I am not myself against Cloud services per se as long as the Cloud provider is transparent with what it does.
WordPress uses this business model extensively. WordPress.org is the Free Software community resources for self-hosting. WordPress.com provides a managed-version hosted in their private cloud for a fee.

As WordPress is GPL, hosting a modified version of WordPress behind a server does not trigger the copyleft effect as the software is used in a private server and not distributed in the traditionnal term.

That enables many other cloud providers to provide hosted version for a fee without abiding to the copyleft and create a healthy competition for the users that can choose the best and the cheapest option. (Actually, even if it was AGPL it wouldn't matter much as WordPress is usually hosted as is without any changes behind the Cloud - but this license is very misunderstood and feared.) It also encouraged external developers to write plugins for WordPress.

For WordPress, this model has been rather successful, as they also sell training, support, ask for donations and sell "premium" plugins. The word "they" here, refers broadly to "the WordPress community as a whole, from WordPress core developers, to the independent third-party plugin developers, the cloud providers, the IT teachers, the freelance developers helping end-users making their website...etc". Anyone can make money with WordPress by learning it and then proposing any service around it against a price. As a result, the WordPress project founders managed to create a large pool of contributors to enhance their project, especially via their plugin system. These very same people market the project for them, which indeed attract more users and more contributors. This strategy happens to scale very well.

This business and licensing model is the core reason why WordPress succeeded as the most used CMS rather than its early competitors. Not the initial technical value of the product.

I think this strategy works for WordPress because it is a generic Web Framework with an extremely large pool of potential end-users. It wouldn't be so successful if its purpose was more niche like if WordPress was a messaging library addressed specifically to certain developers.

For example, the Open-Source companies relying mainly on Managed version of their library on their Cloud for getting income seem to have been severely damaged by big Cloud Infrastructure Vendor, namely Amazon AWS that captured their open-source core product and proposed the same hosted version for a lower fee without significantly giving back to the project itself.

Using the AGPL was the chosen solution to avoid such behaviour by some of these companies, like Neo4j or MongoDB.

However, AWS does not modify the open-source software licensed under AGPL that they provide through their Cloud. They solely distribute it unmodified behind a network. Therefore, they do not need to make available their own code.

This led these open-source vendors to use source-available license for their core products or their additional features, like Redis with the [Common Clause](https://commonsclause.com/) and later the [Redis Source-Available License](https://redislabs.com/legal/licenses/), and MongoDB with their [Server Side Public License](https://www.mongodb.com/licensing/server-side-public-license/faq).

Neo4j decided to engage into making [proprietary closed-source product on top of their GPLv3 core product](https://neo4j.com/licensing/).

Another interesting example is ElasticSearch which decided to [mix open-source and proprietary source-available code into the same repository](https://github.com/elastic/elasticsearch/blob/master/LICENSE.txt).

It's a mix between open-core and SaaS.

I think the direction these Open-Source software vendors are taking is reasonable and respectable in the sense that they are at least making their source code available (except for Neo4J) and protecting their business value - which is important for the end-users if they want people to keep maintaining the software.

However, one must understand that 99% of the contributions to these softwares are made by employees of the companies behind it.
They are NOT community-based softwares (unlike WordPress).
The project founders raised money from business angels, hired plenty of people and used Open-Source as a tool to achieve the goal of making a great software and making money out of it. Even though some of them use copyleft licenses, there is no such thing as "Free Sofware spirit" out there. We're 100% commited to the Open-Source movement NOT the Free Software movement.

Open-Source is used mainly as a business marketing tool, and to be transparent to the users about the library they are using (which is a respectable move), so that people will use their tool. As such, it may feel relatively limited ethically. That's actually why, I believe, there is no real contributors community behind the project: there is no incentive from the project founders to create such community.

While they deserve the respect due to their success and the added value they provide to their users, I believe that there is a way to avoid raising funds, a way that engage the whole community instead of having to hire plenty of developers. [Pieter Hintjens talked about it brillantly on his blog](http://hintjens.com/blog:27):

> _"There are, it has been said, two ways to make really large-scale software. Option One is to throw massive amounts of money and problems at empires of smart people, and hope that what emerges is not yet another career killer. If you're very lucky, and are building on lots of experience, and have kept your teams solid, and are not aiming for technical brilliance, and are furthermore incredibly lucky, it works._

> _But gambling with hundreds of millions of others' money isn't for everyone. For the rest of us who want to build large-scale software, there's Option Two, which is open source, and more specifically, free software. You may be asking how the choice of software license is relevant to the scale of the software you build. It's the right question."_

[Pieter Hintjens also said](https://twitter.com/hintjens/status/603446810183610368):

>_""How to make money from open source" is like "How to make money from clean water" or public education or science."_

He believed the only way for creating a community around an Open-Source project was to:
- put people before code
- share copyrights
- use a copyleft licensed (strong or weak for librairies)
- not engaging into dual licensing or such practice
- never make any proprietary features on top of such project

You need money? Only engage into selling support/training/goodies/consulting or get donations.

(Read him, and you'll see ;).)

I think, his position is extremely interesting as he was one of the most prominent writer around the simple but incredibly complex question: "how to create a community around open-source?"
That's the key to a successful project. If you have enough people engaged into making a great product, he believed that the money will come naturally afterwards - and that it was the only way apart from Option One.

He designed the [Collective Code Construction Contract (C4)](https://rfc.zeromq.org/spec:22/C4/) to set in marber the way people should work together in a de-centralized way to improve the open-source project.

However, in my opinion, his views were a bit too extreme when it came to business models. I do not believe unpaid contributors, or starving projects make a better product. He was often referencing to [Wikipedia as a successful community-based project that is always starving and asking for donation while being extremely successful](http://hintjens.com/blog:117).

Well, if you ask me, I'd say that Wikipedia's purpose is different from any other commercial software. Being a FLOSS doesn't mean you don't want to make money. Wikipedia has a higher ethical purpose and works behind a foundation for free and unbiased information. It has no commercial purpose, this is a wonderful goal and I have huge respect for people working towards this objective.

But, if I were to engage into founding or contributing to a software like [ZeroMQ](https://zeromq.org/), and I was a developer with a fulltime employement job on the side, I would personally prefer being able to make money out of it, being successful financially so I can quit my daily job and put more and more energy into making the project grow, making the project sustainable while still having time to spend with my family.

In fact, I see retribution by money as part of the Freedom necessary for software developers to achieve their goal: work on what they love the most, ambitious and creative frameworks or librairies and thrive to make this world better.

I feel like asking for donations can _sometimes_ be a confession for being unable to successfully find meaningful and ethical business model around your activity, that engage more people than just you and eventually a few other core contributors. It _can be_ a confession for lack of business creativity. (I emphasize on "sometimes", because for some, like for foundations but not only, it is a solution that has been seriously reflected on.)

# Dual licensing

Dual/Multi Licensing consists in:
- releasing a software under a strong copyleft license such as GPL or AGPL
- provide a "Proprietary License" as well for companies that does not wish to engage into making Free Softwares against payment

The project founders shall make people sign a Contributor Software Agreement to all the external contributors to the software for them to give away their copyright to the project founders.
That's the only way they can then publish the external contributions under a different license (the Proprietary License).

Weirdly, often times, the companies wishing to engage into making nonfree softwares do NOT really need to buy a proprietary license, as some of the libraries/drivers to connect to the core library that's under GPL/AGPL are licensed under a permissive or weak copyleft license.
However, the official vendor website promoting selling the "Proprietary License" often voluntarily confuse people by calling such license "Commercial License". The use of the term "Commercial" confuses people that think they need to buy a license whenever they engage into selling a product.

Or sometimes, they are confused in such a way that they think the copyleft will apply to their code and that they will have to use GPL/AGPL which is not even true - or only true for part of the functionalities.

Companies using such business model can also insinuate that using GPL means that you have to make your code publicly available which is not even true. Using GPL means you have to deliver your source code to the user you are distributing your software to - not to the public.

The three most famous companies engaging into dual licensing is The Qt Company, MySQL and MongoDB.

MySQL business models worked pretty well until the Cloud became a thing and they were abused by Cloud providers (MySQL is only GPL).
This [talk from MySQL's founder](https://www.youtube.com/watch?v=krcKkiKBKms) is very insightful on why they engaged into this business model. They make it clear that solely relying on selling services around the product is difficult financially. Dual licensing seems to potentially bring quite good revenue stream.

[MongoDB says upfront that their drivers are licensed under the Apache License v2](https://www.mongodb.com/community/licensing) so that you do not need to license your own code under any specific terms when using MongoDB, but still - companies feel the need to buy a "Commercial" License, maybe because their lawyer said so.
MongoDB AGPL/SSPL library was chosen as a protection against big cloud vendors, not to enforce dual licensing or to promote Free Softwares.

Qt is [less clear](https://www.qt.io/licensing/). Most of their library are using LGPL so using them is no problem, but they seem to [confuse people a lot](https://www.quora.com/Can-I-use-the-free-QT-for-c++-commercially).
Qt used to be full GPL so there were more incentive to buy a "Proprietary License". Weak copyleft is not really enough to push people to buy a license.

In fact, Qt, [MySQL](https://www.quora.com/What-is-the-number-of-MySQL-contributors) and MongoDB codebase are maintained at 99% by their employees. There is no fundamental difference with open-core+SaaS vendors like Redis/Neo4j/Elasticsearch.
They are all ex proprietary-only software vendors trying to leverage open-source as a means to achieve their goals - and they perceive the availability of the source code (for trust purpose) as their core ethical value.

Dual licensing is sometimes referred by its detractor as ["having your cake and eating it too"](https://www.linuxinsider.com/story/38172.html). For some, it creates ["a weird asymmetry and might be a strong deterrent to any community contribution"](https://opensource.stackexchange.com/questions/4092/how-to-accept-contributions-for-agpl-proprietary-dual-licensed-projects). Pieter Hintjens also [despised such practice](http://hintjens.com/blog:68). Some say that dual licensing are unfriendly to startups.

However, [this StackExchange answer from the founder of iText](https://opensource.stackexchange.com/questions/88/how-can-large-open-source-projects-be-monetized) explains well why dual licensing is the only pragmatic way to support financially the developers of Free Software libraries.

But how to make it more ethical and contributor-friendly?

# Conclusion

None of the previously mentionned business models are fully satisfactory. They all can work in certain ciscumstances. In general, the more you trade your ethical values, the less you lean towards full open-source or even full copyleft, the less you are likely to make money. Dual licensing is a tweaked counter-example that suffers from lack of attrativity to contributors. In the next episode, I will introduce an innovative community-centric alternative to traditional dual licensing.