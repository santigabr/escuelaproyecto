<template>
  <main class="bg-rhino-200">
    <div class="w-full min-h-screen lg:grid lg:grid-cols-2 place-content-center lg:mx-auto gap-5 justify-center max-w-6xl px-3 xl:px-0">
      <div class="flex flex-col justify-center gap-5">
        <h2 class="text-6xl pb-2 font-[900] text-rhino-950 max-w-[500px] tracking-tighter">
          Todo lo que eres. En un simple enlace.
        </h2>
        <p class="max-w-[500px] text-rhino-900 text-lg tracking-tighter font-medium">
          Un enlace para ayudarte a compartir todo lo que creas, creas y vendes desde tus perfiles de Instagram, TikTok, Twitter, YouTube y otras redes sociales.
        </p>
        <div class="flex gap-2">
          <Button href="/hola">
            Reclama tu linkin!
          </Button>
        </div>
      </div>
      <div class="grid place-content-center">
        <NuxtImg class="lg:block hidden" src="/linkbio.webp" />
      </div>
    </div>
  </main>
</template>
