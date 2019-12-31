---
title: "FLOSS Business & Ethics: Part 4 - The Robin Hood social contract"
cover: "../../static/images/gpl-logo.png"
date: "29-11-2019"
author: "Nicolas Gimenez"
category: "floss"
tags:
    - open-source
    - free software
    - business of floss
    - philosophy
    - ethics
    - robin hood
    - dual licensing
    - must read
--- 
 
 This is the last part of the series. In this episode, we will present an innovative community-centric alternative to dual licensing, more respectful of the original ethics of Free Software: the Robin Hood social contract/business model.

 For a reminder of the different licenses and the history of Free Software and Open-Source, check out the [first episode](https://baozi.technology/floss-business-ethics-part-1-definitions-and-context).
 For my thoughts on the meaning and purpose of the Free Software and Open-Source movements, refer to the [second episode](https://baozi.technology/floss-business-ethics-part-2-towards-a-pragmatic-approach-to-the-spirit-of-free-software).
 For the state-of-the-art of the different business models used to support the development of a FLOSS, see the [third episode](https://baozi.technology/floss-business-ethics-part-3-business-models).

# Why do we need another business model?

I emphasize here that the following business model will apply to software library, not standalone software.

I believe that there is a way to avoid raising funds, a way that engage the whole community instead of having to hire plenty of developers. [Pieter Hintjens talked about it brillantly on his blog](http://hintjens.com/blog:27):

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

(Read him, and you'll see!)

His position is extremely interesting as he was one of the most prominent writer around the simple but incredibly complex question: "how to create a community around open-source?"
That's the key to a successful project. If you have enough people engaged into making a great product, he believed that the money will come naturally afterwards - and that it was the only way apart from Option One.

He designed the [Collective Code Construction Contract (C4)](https://rfc.zeromq.org/spec:22/C4/) to set in marber the way people should work together in a de-centralized way to improve the open-source project.

However, in my opinion, his views were a bit too extreme when it came to business models. I do not believe unpaid contributors, or starving projects make a better product. He was often referencing to [Wikipedia as a successful community-based project that is always starving and asking for donation while being extremely successful](http://hintjens.com/blog:117).

I'd say that Wikipedia's purpose is different from any other commercial software. Being a FLOSS doesn't mean you don't want to make money. Wikipedia has a higher ethical purpose and works behind a foundation for free and unbiased information. It has no commercial purpose, this is a wonderful goal and I have huge respect for people working towards this objective.

But, if I were to engage into founding or contributing to a software like [ZeroMQ](https://zeromq.org/), and I was a developer with a fulltime employement job on the side, I would personally prefer being able to make money out of it, being successful financially so I can quit my daily job and put more and more energy into making the project grow, making the project sustainable while still having time to spend with my family.

In fact, I see retribution by money as part of the Freedom necessary for software developers to achieve their goal: work on what they love the most, ambitious and creative frameworks or librairies and thrive to make this world better.

I am under the impression that asking for donations can _sometimes_ be a confession for being unable to successfully find meaningful and ethical business model around your activity, that engage more people than just you and eventually a few other core contributors. It _can be_ a confession for lack of business creativity.

# Selling exceptions to the AGPL and the Robin Hood business model

Suprisingly for some, Richard Stallman makes a [difference between selling Proprietary Licenses and selling exceptions to the (A)GPL](https://www.fsf.org/blogs/rms/selling-exceptions) and pledge for companies which engage in such practice as being a strategy towards the Free Software goal.

The fundamental difference between selling exceptions and dual licensing, that many people don't get, is that you only give away the possibility to incorporate your library in a proprietary software. But your library itself will always remain free. 

*As such, dual licensing is granting "permissive" rights over the library for a price while "selling exceptions" is granting weak-copyleft rights over the library for a price.*

## Which weak-copyleft license should you sell? 

Giving people the right to get over side clauses of the GNU GPLv3 like "tivoization" is controversial. I myself think it is ok, considering you're already allowing other people to do something "wrong" by allowing them to embed your free software into their proprietary code. So the point here in my opinion, leans more towards the OSS practical use of the copyleft, that is about _being used_ while _enforcing sharing improvements_, so that you can keep the community building Free Software alive. 

That is why I encourage people "selling exception" to offer MPLv2 license for a fee as an alternative to the GNU GPL for proprietary vendors. The wording of "selling exception" is misleading here, as you factually do license your software under another license, but the point is in practice MPLv2 behaves as "file-level GNU GPL" despite being a separate license.

In fact, using a well-established license backed by a well-known foundation (Mozilla) makes things incredibly easier for companies interested in buying your product to convince their lawyer that it is ok to buy a license, as adding exceptions to an existing license lawfully creates a new license. And [lawyer tends to have very strict policies regarding the use of copyleft OSS licenses in proprietary softwares](https://softwareengineering.stackexchange.com/questions/221365/mozilla-public-license-mpl-2-0-vs-lesser-gnu-general-public-license-lgpl-3-0): they only use well known established unmodified licenses.
It also makes life easier for you, the free software library developer, as you don't need to hire a lawyer to write those exceptions. As a result, it boosts your income and time you can spend on your project ;).

## Treat contributors and customers equally

I do understand that someone who spend time contributing to a codebase should have as much rights towards this codebase as someone who pay for "exceptions" to the copyleft and that's why such practice is considered by many as a strong deterrent to building a community.

Moreoever, enforcing restriction (copyleft) to contributors may feel rude especially when such company make money on their back by giving this very same right to others.

I've designed the Robin Hood business model in order to cope with this issue. Funnily enough, I recently came across this very same expression "Robin Hood", coming from [the maintainer of a fork of MySQL](https://krow.livejournal.com/673195.html) that despised the dual licensing business model, written 10 years ago! I did not know the term was even used before I came out with it.

He named it right. Robin Hood. Selling exceptions to Free Softwares licensed under the AGPL/GPL is, theoretically, like being a sort of Robin Hood which takes money from the "bad actors" that engage into proprietary softwares and give it back to the Free Software community.

For me it makes so much sense. Abide by the rules that gives Freedom to your users, or pay. However, there is something lacking here to make it ethical. It should be: abide by the rules, pay, _or contribute_.

The main issue with the way this dual licensing is usually done is that there is not enough distinction between a regular user and a contributor.
Contributor shall have the same if not more attention from the project founders than the people who buy exceptions.

Selling exceptions shall NOT be the ultimate goal. The ultimate goal shall be to engage a community commited to write great Free Software and to promote its inherent philosophy. Selling exceptions should only be a means to achieve such goals - a strategy as Stallman would say. Selling exceptions is only one of the means to pursue this objective. It shall be about:
- acknowledging that contributors and ultimately people behind it have ambition and value, and deserve to be paid for their work
- acknowledging that well-paid full-time developers make better softwares than the very same developers struggling to find time for it
- acknowledging that UX/UI is important and a Free Software project needs money to pay designers as well (these ones rarely work for free)
- acknowledging that support/training/donations are generally not enough to provide sufficiently to a whole community.

## Which steps should you follow to adopt the Robin Hood social contract?

1) Release ALL your code under the (A)GPLv3 (Affero if it is a server-side software). NO proprietary add-ons are tolerated. And yes version 3, that includes the tivoization clause.
2) Make people sign a CLA to transfer their copyrights to you.
3) Adopt the modified C4 where the intentions behind the copyright assignment is clearly stated (see below), and create a real community of contributors around your project.
4) Sell two different kind of exceptions at different price: GPLv3 and MPLv2. AND YOU STOP THERE! In no ways plain users from the proprietary software world need to go further. If you sell more exceptions, then it could impede the integrity of your project - and the freedom of your library. If they don't understand: explain them!
5) Make different prices if it is for individual/startup use or for corporations.
6) *Give MPLv2 licensing rights over the library to ALL the contributors including to contributors of projects your library is directly based on*, that they can use only for their individual purpose or for their startup or the startup they are working for.
7) Enable larger corporation to sign a contribution contract in exchange of the possibility to an MPLv2 license. They dedicate a team with X people working Y hours a day on the project in exchange for it.
8) Make it CLEAR on your website/app, make it easy for people to buy your license without needing interacting with a human. Consider it as a product, the same way as you would do with support, SaaS, training or donation. DO NOT LIE in any way on what AGPLv3 is about. Promote and encourage people to embrace the AGPLv3 license instead, but make it easy for people who don't think like you to purchase a license. Make it clear that you are contributor-friendly, and be explicit about your need for contributors. Be explicit that this is a community project.
9) Be transparent about the money you get from the sell of exceptions. Be transparent about what you do with it. Pay designers/ergonomics specialists for your GUI. Sponsor generously ALL your contributors, even by a little, depending on their implications in your project.
10) Finally, if some entity (even a big corporation) makes another cool Free library using yours and also want to engage into selling exceptions through the Robin Hood business model - be encouraging and give them the MPLv2 exception for free. If you don't, they will not be able to sell exceptions because they don't hold copyrights to your library, and the copyleft would be enforced by your AGPLv3 library. Why for free? Don't be greedy - your primary goal is to propagate the Free Software philosophy.

This way, you are still fully engaged in the great values carried by the Free Software movement, while being pragmatic and upfront about money.

## Practically speaking, how to sell your exceptions and for how much?

When selling your exceptions just relicense the code to either GPLv3 or MPLv2 and pay a lawyer to add some conditions for you: only for X amount of time, only for individual use, only for that company, etc. Try to make people pay monthly/yearly a reasonable amount of money instead of selling hyper-expensive perpetual license and then having no more income. 

I witnessed that in most projects led by geniuses-developers-nerds-only (seriously they are good at writing code) with the I-don't-like-bullshit-sales-business-mentality engaging in some form of dual licensing, like with [SQLite Team which claim on their website "We are a 100% engineering company. There is no sales staff. Our goal is to provide outstanding service and honest advice without spin or sales-talk."](http://www.hwaci.com/sw/sqlite/prosupport.html). They [sell a license agreement against a one-time fee of $6000](https://www.hwaci.com/cgi-bin/license-step1). Well, maybe they did try other alternatives I don't know. For the case of SQLite, considering they are doing that for a loooong time, it seems to work good enough for them. To be fair with them, they don't really sell a license to use their code, as it is in the public domain. They sell a liability. That's something really interesting to do as well.

As an alternative, you can enable customers to buy a one year subscription fee (paid either monthly or yearly) that gives them a perpetual GPLv3/MPLv2 rights only over one specific version of your library (the latest one available at the end of that year) and older versions. So they don't need to worry about the code they push in production. 
If they don't touch it for years, well then they don't need to pay more. It gives you good incentive to improve your libraries to encourage more people to buy licenses, so it is healthy. Also it makes sense for them to pay for updates rather than "buying license" arbitrarily, endlessly and feeling locked-in. You definitely need to give away _some sort_ of perpetual licenses, or nobody will ever want to buy anything from you. Putting it this way makes it incredibly easier to market too. You sell support, improvements, hard word and sweat. You don't get free money by drinking a cocktail in Costa Rica.

This practice is called a ["perpetual fallback license"](https://sales.jetbrains.com/hc/en-gb/articles/207240845-What-is-a-perpetual-fallback-license-) and is used successfully by JetBrains for years. JetBrains, a company [making 40-60% annual growth in 2018](https://resources.jetbrains.com/storage/products/jetbrains/docs/jetbrains_corporate_overview.pdf) - I'd say it is a good model!

Optionally, do you want even more commitment to your project, and ultimately even more money generated by your software? Your project is already very successful and you earn a lot of passive income? Well, that's thanks to your community. Engage into paying yourself at most 20 times more that the lowest paid employee. Considering you will not have many employees in the traditional fashion - consider it is your lowest paid contributor (like the one-time dev who just fix a minor bug). Consider them as freelance developers.

Put this in bold on your website/app - trust me it will encourage people to work for you if they know they are truly valued. 

## Protection from big cloud providers

Finally, an addionnal advantage of this model is that it also enables you to protect your little community from predacious big cloud providers that may want to capture your project. They cannot make a non-AGPL hosted-version of the customer's code that uses your library.

The customer will always have to come to you if he wants to avoid the "constraint" (it is actually "freedom") of AGPL. Unless, this cloud providor comes to you and either buy a license or set up contribution contract to actually give back to your community. The latter is what's lacking in the MongoDB SSPL to make it ethical.

## Robin Hood can be used conjointly with other business models

Using the Robin Hood business model doesn't mean you can't engage into the other business models exposed earlier like providing a SaaS, support, training or receiving donations.
You can mix them all - espcially donations, as you are still tight to the ethical values of the Free Software movement.

# Limits of the Robin Hood business model

Now we've talked about how awesome selling exceptions can be, let's explore the drawbacks and limits of this approach.

## But if you systematically pay contributors, what's the difference with projects in which 99% of contributors are employees?

I can hear you guys! "By adding money concerns, you are pouring dirt to the beautiful selfless craft of open-source!".

In some ways you are right. But I'd argue that money issue _is already part of any open-source project_. Its presence is simply not necessarily obvious - but it's always there.
As of you, who cringed when I sarcastically critized other business models by claiming "oh my god, those are employees-based project, not real worldwide community-based projects", well you are making a fair point ;).

In fact - I have nothing against employment per se. Quite the opposite. I think if you can employ some of your contributors to make an even better library, that's freaking awesome! You'll make everyone happy.

However, what I did not like with the other business models, is that there is less incentive for external contributors (i.e - not employees or founders) to participate.
By utilizing C4 and by embracing the spirit of free software, you are more likely to attract a wide variety of external contributions. I believe projects that have more heterogeneous contributions from many different places are more likely to last longer and to be more successful for both founders and users.

But obviously, we are in modern times when developers have no time to contribute to so many wide variety of projects. So you'll likely not to have that many external contributors. It is simply the fate of all FLOSS these days.
Even Hintjens was advising to hire your first contributors.

Hire your first contributors and then keep paying the non-employees. Eventually hire them later. Or not. Paying them is also one more way to encourage contributions, in a world where developer workforce is scarce. It can be a cool way to attract potential employees/freelance without having to rely on the headhunters of LinkedIn ;).
It's also a great way to grow slowly, but surely, without necessarily having to rely on raising funds.

## Robin Hood and third-party libraries

When you build you whole new software library, that you wish to monetize using Robin Hood, you _will_, as a matter of fact be using other people's work to support it. You might be tempted to use a GPL or AGPL library for example. But then the copyleft effect of these licenses will apply to your whole code and you will not be able to sell exceptions. Sadly, unless you manage to convince the group of people that make the GPL/AGPL library you rely on to sell you a MPLv2-like license, you cannot use these libraries if you want to engage into selling exceptions.

## Risk of combining C4 and selling exceptions

Because you sell licenses, you need to be 100% sure that the contributors have full copyright over the the code they push to your repository otherwise your CLA worths nothing. It means that the contribution cannot be a bare copy from another copyleft or proprietary project. It must be either completely new code, or being taken from a permissively licensed repository. Otherwise you are doing something illegal. And also potential buyers' lawyer will just run away if they don't have some kind of assurance that you do control contributions in some way. 

[SQLite makes sure this doesn't happen by being very restrictive about who contributes to the source code](https://sqlite.org/copyright.html) - but we can't apply this technique as the whole point of use of [C4](https://rfc.zeromq.org/spec:22/C4/) in the Robin Hood business model/social contract is to build a community around the project.

The C4 does provide a clause for that: 

> "A patch SHALL NOT include non-trivial code from other projects unless the Contributor is the original author of that code."

If it does, the patch is refused. In practice it can be difficult to verify all the time, but in our case contrary to ZeroMQ it becomes extremely important - so it must be emphasized to the community and enforced in a way or another.

It can be very hard to verify though because the C4 is very permissive with newcomers. It is actually the point of the C4: encouraging new contributors to join - and accepting their pull-request fast, even before a review. Pieter Hintjens called this practice the [Optimistic Merging](http://hintjens.com/blog:106) style.
That's a dilemma I haven't solved yet. I think modifying the C4 to emphasize that maintainers have the responsibility to check this as a priority before accepting pull-requests may be sufficient - but the use of some sort of automated tool to check for similarities in popular GitHub/GitLab repositories could be both a relief for the community and a good selling point for lawyers to accept that their company buys a license. It could be a key to reassure customers and secure income.

There seems to be [some options for automated check of code plagiarism](https://www.quora.com/Are-there-any-tools-to-check-how-similar-two-source-codes-are) but nothing that connects to the GitHub/GitLab API.

Some could argue that it is literally impossible to be certain that this condition is met, because a contributor can always lie and say that his employeer permits him to contribute and give away his copyright over the code - which is hard to verify.

Also, there is no way you can check the plagiarism of a source code that's copyrighted privately and not published anywhere else.

It's a complex issue that should be addressed with a lawyer.

It is part of the reason why individual entrepeneurs usually go for sponsoring/support. It feels safer, less complicated than bothering with contract laws. It also requires no financial investment (lawyers do take money...)

However, I still believe that by being so repelled by business strategies, we, FLOSS developers, are missing a large part of the cake we deserve.

## Robin Hood and C4: what about the forks?

In C4, you only work in the master branch in the main repository. Everybody forks the project and send pull-requests.
C4 embraces forks as a way to experiment. But for us, it can be a danger. Pull-request to the main project can only be accepted if the person that asks for it holds the full copyright over the change.

If one made change on his own and send a pull-request, that's just fine. However, if a group of people start experimenting on a public fork, and the project grow uncontrollably, it becomes almost impossible to pull back the changes from this fork to the original project.

Why?

That's because by pulling the changes, you're getting AGPL licensed code from various copyright holders that did not all sign your CLA. It is theoretically possible to make them sign it, but in practice it will be very hard. So if you incorporate their changes your whole business model collapses.

That alone could be a strong deterrent to facilitating the creation of a community.

But... C4 could be modified to encourage people to work on branches within the same repository - or to apply the same CLA over their fork.
By consistently retributing them _financially_ over the licenses you sell, they may be more inclined to accept the hassle of setting up your CLA on their fork.

In fact if the people who fork you apply the Robin Hood model as well, they would give away MPLv2 right to you over their code and you should do the same to them. And then each of the project founders could sell their licenses.

And if they don't... be it! Their forks have to be AGPL anyway. If people start using AGPL software and not need exceptions, then it's great :).
However, most likely - a pure AGPL fork will not have as much success as yours, considering how deterrent the license is for lots of companies (sadly).

## How to make the Robin Hood social contract more official?

I can't help thinking that the Robin Hood business model is still _just a moral contract_. Nothing prevent you (or the company that buy yours) from changing entirely of direction, considering you hold the full copyrights to that library. That alone could be a strong deterrent to creating a community. 

That's actually [why Pieter Hintjens was always for sharing copyrights](http://hintjens.com/blog:68) and thought making contributors sign CLA made them run away. But sharing copyrights, first does not allow selling exceptions, and therefore sabotage the very health of the project by not allowing it to engage into the most lucrative business model for Free Software out there, secondly [makes it hard to eventually change the license](http://www.jbkempf.com/blog/post/2012/How-to-properly-relicense-a-large-open-source-project) (for example from GPL to AGPL or from AGPL to {another new stronger copyleft license coping with the new reality of the market}), and finally [makes it difficult to enforce the application of the license](https://www.gnu.org/licenses/old-licenses/gpl-2.0-faq.html#WhoHasThePower). I'd like to lean towards a more official contract, that states clearly all the intentions of the copyright assignment, probably through something like the [Fiduciary License Agreement](https://fsfe.org/activities/ftf/fla.en.html) instead of a standard Contributor License Agreement.

Regarding this matter, I'd need to talk with a professional lawyer familiar with the software licenses and contracts. 

## When is using the Robin Hood business model inappropriate?

If you are making a standalone product, not just a library that is aimed to be embedded by another developer to his own code, then dual licensing/selling exceptions and Robin Hood is not relevant. A standalone product is used by an end-user "as is". He does not need to modify it to make it work. Therefore, the free license becomes an advantage for him indeed, rather than a constraint. No need to buy a proprietary license, it would be absurd. However, you may sell exceptions to the AGPL to other developers for the individual _librairies_ that constitute your standalone free software - in order to support your project. It may or may not be enough. You can also use the other business models exposed earlier, sell support, receive donations to make new functionalities and maintain the software...etc.

If you are a foundation, that is doing a standalone FLOSS (not just librairies) and your main ideological purpose is fighting for freedom, transparency and privacy, like for example [Signal](https://signal.org/), or [the GNU Project](https://www.gnu.org/gnu/thegnuproject.en.html), then you may not want to compromise your values and only rely on donations/support/training rather than giving away the labour of your work to people that make what you are fighting against.

If you don't truly believe that every software should be freed, then obviously the Robin Hood approach is definitely not for you. If you try, you won't be able to create a community around your project and you'll end up being considered doing a greedy form of "dual licensing" instead.

If you don't want to monetize your software and your number one concern is to create a community behind your project, and getting it used, you should forget about Robin Hood and go for the Pieter Hintjens' strategy: use a weak copyleft license for libraries, or strong for standalone product and embrace forks.

# Conclusion

As you can see, the world of FLOSS is extremely wide. I'd say it is easier to make a great software than to come up with a great business model supporting it.
I'm preparing an ambitous project for which I am thinking of engaging into the Robin Hood business model/social contract - because every software should be freed!
More about this project later ;).
In the meantime, let me know in the comments what you think. Which business model would you use to support your next big project, and why?

Thanks for reading this series of article, I hope it helped!