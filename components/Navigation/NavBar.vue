<template>
  <header ref="navRef" class="relative z-0 w-full bg-primary duration-300 ease-in-out lg:absolute lg:z-20">
    <div ref="topBarRef" class="container mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
      <div class="w-36 shrink-0">
        <NavigationLogo class="text-white" />
      </div>

      <nav aria-label="Primary" class="hidden flex-1 items-center justify-center md:flex">
        <ul class="flex items-center gap-4 lg:gap-6">
          <li v-for="item in navItems" :key="item.to">
            <NuxtLink
              :to="item.to"
              :aria-current="isActive(item.to) ? 'page' : undefined"
              class="hanken text-sm font-medium tracking-widest text-white opacity-80 transition-all duration-200 ease-in-out hover:text-white hover:opacity-100 lg:text-base"
              :class="isActive(item.to)
                ? 'border-b-2 border-white font-bold text-white opacity-100'
                : 'border-b-2 border-transparent opacity-80'"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="ml-auto flex items-center gap-3">
        <NuxtLink
          to="mailto:hello@addeddigital.com"
          class="hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold tracking-[0.2em] text-white transition-all duration-200 ease-in-out hover:border-white/60 hover:bg-white/20 hover:text-white md:inline-flex"
        >
          Contact
        </NuxtLink>

        <UiButtonsMenu
          ref="menuButtonRef"
          v-model="menu_revealed"
          color="white"
          variant="unique"
          aria-controls="mobile-drawer"
        />
      </div>
    </div>

    <!-- Overlay: click to close, also dims the page so the drawer reads as modal -->
    <Transition name="fade">
      <div
        v-if="menu_revealed"
        class="fixed inset-0 z-[140] bg-black/50 md:hidden"
        aria-hidden="true"
        @click="closeMenu"
      />
    </Transition>

    <nav
      id="mobile-drawer"
      ref="drawerRef"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      tabindex="-1"
      :class="menu_revealed ? 'translate-x-0' : 'translate-x-full'"
      :style="{ top: `${navHeight}px`, height: `calc(100vh - ${navHeight}px)` }"
      class="fixed right-0 z-[150] w-3/4 bg-primary shadow-xl outline-none duration-150 ease-in-out md:hidden"
      @keydown="onDrawerKeydown"
    >
      <ul class="flex flex-col items-start gap-4 px-8 pt-10">
        <li v-for="item in navItems" :key="item.to" class="w-full text-left">
          <NuxtLink
            :to="item.to"
            :aria-current="isActive(item.to) ? 'page' : undefined"
            class="hanken inline-flex items-center px-1 py-1.5 text-sm font-medium tracking-[0.2em] text-white opacity-80 transition-all duration-200 ease-in-out hover:border-b-2 hover:border-white hover:opacity-100 focus-visible:border-b-2 focus-visible:border-white focus-visible:opacity-100"
            :class="isActive(item.to)
              ? 'border-b-2 border-white font-semibold opacity-100'
              : 'border-b-2 border-transparent'"
            @click="closeMenu"
          >
            {{ item.label }}
          </NuxtLink>
        </li>

        <li class="w-full pt-2 text-left">
          <NuxtLink
            to="mailto:hello@addeddigital.com"
            class="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold tracking-[0.2em] text-white transition-all duration-200 ease-in-out hover:border-white/60 hover:bg-white/20 focus-visible:border-white/60 focus-visible:bg-white/20"
            @click="closeMenu"
          >
            Contact
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const menu_revealed = ref(false)
const emit = defineEmits<{ (e: 'height-change', height: number): void }>()

const topBarRef = ref<HTMLElement | null>(null)
const drawerRef = ref<HTMLElement | null>(null)
const menuButtonRef = ref<{ focus?: () => void } | null>(null)
const navHeight = ref(72)

const updateNavHeight = () => {
  const height = topBarRef.value?.offsetHeight ?? 72
  navHeight.value = height
  emit('height-change', height)
}

const closeMenu = () => {
  menu_revealed.value = false
}

// Escape closes the drawer from anywhere on the page.
const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && menu_revealed.value) {
    closeMenu()
  }
}

// Simple focus trap: keep Tab cycling inside the drawer while it's open.
const onDrawerKeydown = (event: KeyboardEvent) => {
  if (event.key !== 'Tab' || !drawerRef.value) return

  const focusable = drawerRef.value.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )
  if (focusable.length === 0) return

  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

// Move focus into/out of the drawer and lock body scroll while it's open.
watch(menu_revealed, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''

  if (open) {
    nextTick(() => drawerRef.value?.focus())
  } else {
    menuButtonRef.value?.focus?.()
  }
})

onMounted(() => {
  updateNavHeight()
  window.addEventListener('resize', updateNavHeight)
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateNavHeight)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Academy', to: '/academy' }
]

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }

  return route.path.startsWith(path)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>