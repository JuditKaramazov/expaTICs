# Sprint 9 IT Academy | expaTICs
![Alt text](https://github.com/JuditKaramazov/expaTICs/blob/e6402d6d381aa347192b8da0f3b6f255b069086a/public/Screenshot-1.jpeg)


## Prerequisites

First of all, allow me to let you know that before you can run this project locally, you need to set up a `.env.local` file in the project root directory. This file should contain environment-specific configuration variables and secrets required for the application to function properly.
Follow these steps to set up the `.env.local` file:

1. Create the `.env.local` file in your root directory.
2. Open the `.env.local` file in a text editor.
3. Set the value of the `OPENAI_API_KEY` variable to your OpenAI API key. If you don't have one, sign up for an account at [OpenAI](https://openai.com/) and obtain an API key.
4. Save the `.env.local` file!

Next, make sure to install the project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Now, you'll be able to run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```


## Introduction

Not so long ago, I went on a journey that took me to Upper Austria, which is considerably far away from my country, both geographically and mentally speaking. The only thing that I metaphorically took with me was this vague, distant story about my grandmother moving to Germany after our Civil War had finished, with no German knowledge nor any sort of proper formation. The only thing that she kept with her was the urge of finding a stable job that would eventually allow her to come back to our country and take back her life. Even though our situations were drastically different, I could still feel this deep connection with all the German-speaking countries, their reality, and the idea that I created about it in my mind.

`expaTICs` came to mind some weeks ago, back in my country, and still reminding a conversation that I had with my dear `Paulita` in Austria: the expat experience can be a solitary, painful path, independently of how connected we seem to be these days.

![Alt text](https://github.com/JuditKaramazov/expaTICs/blob/e6402d6d381aa347192b8da0f3b6f255b069086a/public/Screenshot-2.jpeg)

Although this wasn't my case, the critical challenge of migration and displacement is as undeniable as the need to coordinate solutions at local, regional, and global levels. Unfortunately, that's far beyond my capabilities; however, I thought that a little application as my `final project` would be a nice tribute to give to everyone that deconstructed and had to build again their realities - not to mention all the people that I met during my personal journey.

If you are still wondering why `expaTICs` exists, allow me to highlight another reason: I probably would have never started programming if it wasn't thanks to the scholarship that I got during my stay in Austria. That's the very essence of `expaTICs`:

- a representation of the expatriates' journey
- the possibilities that go along with it (allowing me to start a TIC formation, in my case)

merged together.

![Alt text](https://github.com/JuditKaramazov/expaTICs/blob/e6402d6d381aa347192b8da0f3b6f255b069086a/public/Screenshot-3.PNG)

The combination of these two ideas resulted in the following utilities and features:

- The usage of OpenAI `API`.
- User management, implemented thanks to `Firebase` authentication system combined with `localStorage`.
- `Private routes` granting users free access to `the site's landing page`, as well as the `login`, `sign up` and `restore password` sections of it, but preventing them from accessing the `Dashboard` (our application's very core) without previous registration.
- The possibility of `editing` their own data `individually` (e.g. a `color tracker` tool that's only accessible to its owner) or `openly` (e.g. a pseudo-wiki allowing users to).
- The integration of different sections focused on the users and their `psychological well-being`.

<br>

## Style
![Alt text](https://github.com/JuditKaramazov/expaTICs/blob/e6402d6d381aa347192b8da0f3b6f255b069086a/public/Screenshot-4.PNG)

No matter my good intentions, I am not a psychologist nor a bureaucratic expert; the only thing I can rely on is my own experience and the stories of the ones I got to meet along the way. Still, and since the main problems expressed by expats gravitate around `a deep sense of solitude` and `bureaucratic challenges`, I decided to divide the project into the following (and not-so-traditional-anymore) sections:

- A `Main` page welcoming all new users, with a `slider`, a `carousel`, a `banner`,`type writer` effects, a `scroll-to-top` button, and a `navbar` taking everyone to a mandatory authentication process.
- The `Login`, `Register`, and `Restore password`, with the previously discussed content.
- Our main `Dashboard` page, including:

1. `Menu`: a "welcome page" allowing the user to track their mood and take different measures accordingly (there's a secret achievement to unlock in the `sidebar`, by the way!).
2. `Community`: the opportunity to collaboratively build a little wiki accessible for everyone and allowing all users to `create articles`, `edit`, and `delete` them.
3. `Solidarity`: a metaphorical way of expressing solidarity with others and one's self allowing the user to open themselves - and sometimes, get a symbolic answer.
4. `Support`: relevant `phone numbers` and `sites`, as well as an `AI-powered chat system` in order to help users to find relevant information and resources for various bureaucratic tasks.
5. `Privacy`: a `gentle reminder` of the application's purpose and the importance of keeping in mind that `we matter`.

![Alt text](https://github.com/JuditKaramazov/expaTICs/blob/e6402d6d381aa347192b8da0f3b6f255b069086a/public/Screenshot-5.PNG)

The visual and technical aspects of `expaTICs` could have been way better - I am aware of it, and it saddens me that I had to discard some of the original ideas due to the lack of time, energy, and knowledge. However, as `IT Academy` stated when introducing this `Sprint 9`, the goal of this final project was to find ideas that would keep us motivated just so that we could resume and improve them in the near future.

Although I must admit that I'm not planning on touching a computer until some days have passed (it's been an exhausting formation, come on! And I belong to a touristic, holiday-village-styled country, after all!), the original idea matters enough to me to give it as many tries as necessary. 

Regarding this `try-hard` matter, and since you all know how stubborn I can be, I would want to entone a sincere `thank you` to all the people involved in this project (huge Kudos to the `Freepik` team and their visuals!), and especially to the ones who showed me their support and patience during these difficult days.

Do not ever doubt it: if I managed to submit this last sprint, it was all thanks to you, guys.

As for the rest of you: let's share a metaphorical coffee, and remember that `you are not alone`.

<br>

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
