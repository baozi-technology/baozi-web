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
 
How do we financially sustain the developement of a FLOSS? What are the advantages and drawbacks of each approachs, based on real-life examples? 

If you are unconfortable with the notions of open-source, free software and software licenses, read the [first part of this serie](https://baozi.technology/floss-business-ethics-part-1-definitions-and-context)! 
For my humble thoughts on the ethical stance of both movements, check out the [second part of this serie](https://baozi.technology/floss-business-ethics-part-2-towards-a-pragmatic-approach-to-the-spirit-of-free-software).

The choice of software licenses is key to a successful business model. As retroactively taking back rights given by a license is not possible, it must be thought ahead. 
A few technically successful projects have been abandonned because the [maintainers couldn't find time to work on the project anymore](https://www.codeshelter.co/).
Sometimes, even companies which engaged into raising money from venture capitalists did not succeed financially despite the widespread usage of their product. A good example of that is [Docker](https://www.zdnet.com/article/docker-is-in-deep-trouble/).

There are plenty of initiatives these days to pay the open-source developers, namely [GitHub Sponsoring system](https://github.com/sponsors), [Patreon pages](https://www.patreon.com/), [RedHat Tidelift](https://blog.tidelift.com/open-source-creators-red-hat-got-34-billion-and-you-got-0.-heres-why).

# Selling the software itself

Free standalone Softwares may be sold the same way as proprietary softwares. As said earlier, [nothing forbid it](https://www.gnu.org/philosophy/selling.en.html). The most famous example is copies of GNU Emacs, that was [sold by Richard Stallman](https://www.oreilly.com/openbook/opensources/book/stallman.html) back in the time.

But GNU Emacs was distributed at a time when barely 10% of the global population had access to a very slow internet. Today everyone can download it for free. Even if you'd lock Emacs and release it as a free trial with a paid option, someone could study the source code and release another version without the lock for free on the Internet. It is in practice difficult to enforce a payment. All this is legal and encouraged by the FSF.

That being said, non-technical end-users do not care about software licenses. They do not know anything about it. If you tell them to pay to use the software, they will just do it. But they might feel betrayed if you did not warn them that there were a way around payment.

Generally speaking, selling the software itself does not work well if the software is 100% open-source. It has better result when at least a tiny part of your software is proprietary.
A counter-example could be the commercial ["premium" WordPress plugins](https://www.wpstuffs.com/3-best-places-buy-premium-wordpress-plugins/) which are free softwares (licensed under the GNU GPL).

# Support, training and donations

Most people distribute FLOSS for free, and make end-users pay for advanced support, specific training or simply ask for generous donations.

If the software is a standalone as opposed to a software library, the main interest of the license business-wise is to enforce sharing improvements. Therefore, you'd rather use a strong copyleft license - such as the GNU GPL. 

Ex of projects adopting this strategy:
- the GNU projects
- Linux
- [WordPress](https://developer.wordpress.org/themes/getting-started/wordpress-licensing-the-gpl/)
- [Blender](https://www.blender.org/about/license/)

For a software library, using a permissive license can be interesting because:
- it makes it smoother for people to use the library
- it allows the software owners to both accept contributions and make proprietary add-ons on top, which may reasure the investors behind the project

Ex of projects adopting this strategy: 
- [Quasar Framework](https://quasar.dev/)
- [Cowboy and Nine Nines](https://ninenines.eu/).

Some prefer using a weak copyleft license instead for libraries: 
- VLC core library which recently [moved away from GPL to LGPL](https://www.videolan.org/press/lgpl-libvlc.html)
- ZeroMQ which [uses LGPLv3+static exception and is moving towards MPLv2](http://wiki.zeromq.org/area:licensing)

It really depends on your goals:
- are you pursing the Free Software spirit or the Open-Source ideology? ==> go for copyleft for the former
- do you want to enforce sharing of improvements, avoid being captured by a proprietary project ==> go for copyleft
- do you prefer making sure everyone can use your software? => go for permissive

It must be noted that if somebody forks your permissive project and make it GPL, you will NOT be able to pull back the improvements to your permissive project using your permissive license. You will need to change your license to GPL. 
That's one of the reason why permissive license advocates often dislike copyleft users. They consider that GPL-like licenses are viral and polluting.

It's a risk and this reason alone is enough to advice any one of you wanting to engage into making a significant open-source library with a permissive license to choose a weak copyleft license like the MPLv2 instead, especially if you are a small startup or an individual.
Pieter Hintjens talked about it better than me [on his blog](http://hintjens.com/blog:27). 

Martin Sústrik, ZeroMQ co-founder that forked the LGPL project to create Crossroad I/O, famously [disagreed with the use of a copyleft license in ZeroMQ](http://250bpm.com/blog:7). He explains [why he is a permissive license supporter on his blog](http://250bpm.com/blog:15).

As a tolerant Free Software advocate, I'd recommend anyone that is forking a permissive library to a copyleft-licensed repository to be a good OSS citizen: if you can, push your changes relevant to the original work to their original repository with their own permissive license. Let's not impose our views on people.

Interestingly, from what I've seen, the two projects of Martin Sústrik, Crossroad I/O and nanomsg, did not (yet) have the same sort of success, and did not gather as much of a community as ZeroMQ did. Maybe the use of the ["benevolent dictator" model](https://lwn.net/Articles/488732/) for handling his community over the innovative de-centralized [C4 contribution policy](https://rfc.zeromq.org/spec:22/C4/) of ZeroMQ can explain it. Or maybe the choice of license? It is hard to say.

At this game of selling support and training, it mostly doesn't work for individual developers and small companies. RedHat is the real winner here. The land page for their [Tidelift project talks about it better than anyone](https://blog.tidelift.com/open-source-creators-red-hat-got-34-billion-and-you-got-0.-heres-why). Most companies don't want to bother with a tons of different support contract for tons of different software modules - and as RedHat says: _"Open source creators: RedHat got $34 billions of you got $0."_. Individual or small group of developers are no lawyers and salesmen, and that's what it seems to take for companies to sign legal and technical support deals.

The amount of money received from donations for small projects are usually only enough to pay the founder/core maintainers of the project. Anyone else contributing, even significantly is not paid at all. The most successful open-source software working with that model is [Linux](https://www.quora.com/Do-Linux-developers-get-paid-If-so-is-it-on-par-with-the-pay-that-software-professionals-are-paid).

This [interview with the VIM creator Bram Moolenar](https://www.binpress.com/vim-creator-bram-moolenaar-interview/) is symptomatic. When asked _"How can the community ensure that the Vim project succeeds for the foreseeable future?"_, he answered: _"Keep me alive"_.
Often times, when an open-source software relying on donations to a one-man maintainer becomes that successful, the maintainer is hired by a well-established company to work on the project full-time. [Bran Moolenar](https://www.vim.org/sponsor/index.php) works at Google.

What happens when the main project maintainers can no longer contribute to the project? It seems quite scary for the users that rely on such library... That's why it is a necessity to create to create a community of developers - and somehow find a way to get them paid, to some extent like with Linux.

MaterialUI [makes it very clear where the money goes and seems to split it to many contributors](https://material-ui.com/discover-more/backers/).
Still, it is difficult to pay _everyone_ a competitive salary. One of the MaterialUI core maintainer, [Olivier Tassinari, acnowledges that and as a result is part of the RedHat Tidelift subscription](https://tidelift.com/subscription/pkg/npm-material-ui).
In general, FLOSS are a lot more complicated and complex than proprietary softwares, and thus, such developers would be paid quite a lot if it was in the corporate world.

Another problem with relying solely on support (and to some extent, training) is that the more your software is great, the more the documentation is great the less people will need your training/support and therefore it can create a paradoxical vicious loop: the more you get money, the more you can improve your product and the less you will get money.

# Open-core

The fundamental idea is: the core of the product is open-source, but more advanced, "entreprise-grade" features is proprietary pay-to-use software.

An example can be JetBrains IDE products and their freemium business model. A free open-source "community edition" licensed under a permissive Apache 2 License and an "Enterprise" proprietary paid version.

Another alternative is distributing a core open-source product together with another software like a GUI to facilitate the usage of the core. Ex: [MockLab](http://get.mocklab.io/) built on top of [WireMock](http://wiremock.org/) (even though MockLab is also a SaaS - see later).  

The FSF considers any of this behaviour harmful to the cause of the Free Software, obviously, even though they do [allow it through their LGPL](https://www.gnu.org/licenses/why-not-lgpl.en.html).

It can feel very arbitrary to choose which feature should be part of the "Community" edition and which one should be part of the "Proprietary" Edition.

Building proprietary commercial softwares on top of an open-source project can be a deterrent to gathering a community around the core project. This strategy is usually supported almost entirely by the company that initially founded the project, and often require raising funds from venture capitalists.

A counter-example could be [GitLab](https://about.gitlab.com/pricing/licensing-faq/), an open-core alternative to GitHub that is [relatively well supported by the Free Software community](https://about.gitlab.com/blog/2015/05/20/gitlab-gitorious-free-software/). It seems like the [Debian community is contributing to the Community Edition of GitLab](https://about.gitlab.com/blog/2017/11/01/gitlab-switches-to-dco-license/).

# SaaS

SaaS stands out for Software as a Service and is a practice of hosting a Software behind a Web Server for a user for a fee.
The Free Software Foundation does not recommend anyone to use a SaaS because [they take away fundamental freedoms from the users](https://www.gnu.org/philosophy/who-does-that-server-really-serve.en.html).

That being said, it is a common and pretty profitable business model these days - if not the most. It's also a huge convenience for the user and I am not myself against Cloud services per se as long as the Cloud provider is transparent with what it does.
WordPress uses this business model extensively. WordPress.org is the Free Software community resources for self-hosting. WordPress.com provides a managed-version hosted in their private cloud for a fee.

As WordPress is GPL, hosting a modified version of WordPress behind a server does not trigger the copyleft effect as the software is used in a private server and not distributed in the traditionnal fashion.

That enables many other cloud providers to provide hosted version without abiding to the copyleft. It created a healthy competition for the users that can choose the best and the cheapest option. It also encouraged external developers to write plugins for WordPress.

For WordPress, this model has been rather successful, as they also sell training, support, ask for donations and sell "premium" plugins. The word "they" here, refers broadly to the WordPress community as a whole: 
- the WordPress core developers
- the independent third-party plugin developers
- the cloud providers
- the IT teachers
- the companies and their developers helping end-users making their website
 
As a result, the WordPress project founders managed to create a large pool of contributors to enhance their project, especially via their plugin system. These very same people market the project for them, which indeed attract more users and more contributors. This strategy happens to scale very well.

This business and licensing model is the core reason why WordPress succeeded as the most used CMS rather than its early competitors. Not the initial technical value of the product.

I think this strategy works for WordPress because it is a generic Web Framework with an extremely large pool of potential end-users. It wouldn't be so successful if its purpose was more niche like if WordPress was a messaging library addressed specifically to certain developers.

For example, it seems that some Open-Source companies relying mainly on Managed version of their library on their Cloud for getting income have been financially impacted by certain big Cloud Infrastructure Vendors. For example, AWS was proposing the same hosted version as MongoDB without significantly giving back to the project itself.

To avoid this problem, Neo4j and MongoDB initially chose the AGPL license for their core librairies.

However, AWS does not modify the open-source software licensed under AGPL that they provide through their Cloud. They solely distribute it unmodified behind a network. Therefore, they do not need to make available their own code.

This led these open-source vendors to use source-available license for their core products or their additional features, like Redis with the [Common Clause](https://commonsclause.com/) and later the [Redis Source-Available License](https://redislabs.com/legal/licenses/), and MongoDB with their [Server Side Public License](https://www.mongodb.com/licensing/server-side-public-license/faq).

Neo4j decided to engage into making [proprietary closed-source product on top of their GPLv3 core product](https://neo4j.com/licensing/).

Another interesting example is ElasticSearch which decided to [mix open-source and proprietary source-available code into the same repository](https://github.com/elastic/elasticsearch/blob/master/LICENSE.txt).

# Dual licensing

Dual/Multi Licensing consists in:
- releasing a software library under a strong copyleft license such as GPL or AGPL
- selling a "Proprietary License" as well to companies that make nonfree softwares

The project founders shall make people sign a Contributor Software Agreement to all the external contributors to the software for them to give away their copyright to the project founders.
That's the only way they can then publish the external contributions under a different license (the Proprietary License).

Weirdly, sometimes the companies wishing to engage into making nonfree softwares do NOT really need to buy a proprietary license, as some of the libraries/drivers to connect to the core library that's under GPL/AGPL are licensed under a permissive or weak copyleft license.

However, the official vendor website that is selling the "Proprietary License" sometimes voluntarily confuses people by calling such license "Commercial License" instead. The use of the term "Commercial" is confusing because it indicates that you need to buy a license whenever you use the library in a commercial product. That's actually not the effect of copyleft. 

Many people seem to think that using GPL means that you got to  make your code publicly available. Using GPL means that you have to deliver your source code to the user you are distributing your software to - not to the public. It contributes to confuse people about the intent of the alternative paid license.

The three most famous companies engaging into dual licensing are The Qt Company, MySQL and MongoDB.

[MongoDB says upfront that their drivers are licensed under the Apache License v2](https://www.mongodb.com/community/licensing) so that you do not need to license your own code under any specific terms when using MongoDB, but still - companies feel the need to buy a "Commercial" License. I am not sure why, maybe because they need to buy a liability.
MongoDB AGPL/SSPL library was chosen as a protection against big cloud vendors, not to enforce dual licensing.

Qt is [less clear](https://www.qt.io/licensing/). Most of their library are using LGPL so using them is no problem, but they seem to [confuse people a lot](https://www.quora.com/Can-I-use-the-free-QT-for-c++-commercially).
Qt used to be full GPL so there were more incentive to buy a "Proprietary License". Weak copyleft is not really enough to push people to buy a license.

MySQL dual licensing business model worked pretty well until the Cloud became a thing.
This [talk from MySQL's founder](https://www.youtube.com/watch?v=krcKkiKBKms) is very insightful on why they used dual licensing. They make it clear that solely relying on selling services around the product is difficult financially. Dual licensing seems to potentially bring good revenue stream.

Dual licensing is sometimes referred by its detractor as ["having your cake and eating it too"](https://www.linuxinsider.com/story/38172.html). For some, it creates ["a weird asymmetry and might be a strong deterrent to any community contribution"](https://opensource.stackexchange.com/questions/4092/how-to-accept-contributions-for-agpl-proprietary-dual-licensed-projects). Pieter Hintjens also [despised such practice](http://hintjens.com/blog:68). Some say that dual licensing are unfriendly to startups.

However, [this StackExchange answer from the founder of iText](https://opensource.stackexchange.com/questions/88/how-can-large-open-source-projects-be-monetized) explains well why dual licensing can be a pragmatic way to support financially the developers of open-source libraries.

# Conclusion

Business models around FLOSS are really complex. Selling the software itself, Open-core, SaaS and Dual Licensing are just a few of them. I am no expert and I do not pretend being exhaustive here, but I hope this episode will have been useful to you.
