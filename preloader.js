// Enhanced preloader and animation script
document.addEventListener("DOMContentLoaded", () => {
  // Create loader element
  const loader = document.createElement("div")
  loader.className = "loader"

  const loaderIcon = document.createElement("div")
  loaderIcon.className = "loader-icon"

  loader.appendChild(loaderIcon)
  document.body.appendChild(loader)

  // Hide loader after page loads
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden")

      // Remove loader from DOM after animation completes
      setTimeout(() => {
        loader.remove()
      }, 500)
    }, 800)
  })

  // Add animated emojis to the emoji feature section
  const emojiContent = document.querySelector(".emoji-content p")
  if (emojiContent) {
    // Replace emoji characters with spans for animation
    const content = emojiContent.innerHTML
    const emojiRegex = /(\p{Emoji})/gu
    emojiContent.innerHTML = content.replace(emojiRegex, '<span class="emoji-pop">$1</span>')
  }

  // Add 3D tilt effect to feature cards
  const featureCards = document.querySelectorAll(".feature-card")

  featureCards.forEach((card) => {
    card.classList.add("tilt")

    card.addEventListener("mousemove", (e) => {
      const cardRect = card.getBoundingClientRect()
      const cardCenterX = cardRect.left + cardRect.width / 2
      const cardCenterY = cardRect.top + cardRect.height / 2

      const mouseX = e.clientX - cardCenterX
      const mouseY = e.clientY - cardCenterY

      const rotateX = mouseY / -10
      const rotateY = mouseX / 10

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)"
    })
  })

  // Add ripple effect to buttons
  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((button) => {
    button.classList.add("ripple")
  })

  // Add gradient text animation to hero headline
  const heroHeadline = document.querySelector(".hero-content h1")
  if (heroHeadline) {
    heroHeadline.classList.add("gradient-text")
  }

  // Add shake animation to primary CTA button
  const primaryCTA = document.querySelector(".btn.primary")
  if (primaryCTA) {
    primaryCTA.classList.add("shake")
  }

  // Add shine effect to showcase items
  const showcaseItems = document.querySelectorAll(".showcase-item")
  showcaseItems.forEach((item) => {
    item.classList.add("shine")
  })

  // Add staggered animation to features grid
  const featuresGrid = document.querySelector(".features-grid")
  if (featuresGrid) {
    featuresGrid.classList.add("stagger-fade-in")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    observer.observe(featuresGrid)
  }

  // Add floating animation to phone images
  const phoneImages = document.querySelectorAll(".phone-container")
  phoneImages.forEach((container) => {
    container.classList.add("floating-phone")
  })

  // Add counter animation to numbers in about section
  const animateCounter = (element, target, duration = 2000) => {
    let start = 0
    const increment = target / (duration / 16)
    const updateCounter = () => {
      start += increment
      if (start < target) {
        element.textContent = Math.floor(start)
        requestAnimationFrame(updateCounter)
      } else {
        element.textContent = target
      }
    }
    updateCounter()
  }

  // Initialize counters
  const counters = document.querySelectorAll(".counter")
  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))
    animateCounter(counter, target)
  })

  // Add parallax effect to sections with background images
  window.addEventListener("scroll", () => {
    const parallaxElements = document.querySelectorAll(".parallax-bg")
    parallaxElements.forEach((element) => {
      const scrollPosition = window.scrollY
      const speed = element.getAttribute("data-speed") || 0.5
      element.style.backgroundPosition = `center ${scrollPosition * speed}px`
    })
  })

  // Add intersection observer for all animations
  const animatedElements = document.querySelectorAll(".reveal, .stagger-fade-in")
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  animatedElements.forEach((element) => {
    observer.observe(element)
  })

  // Add animation for the custom phone UI
  const dialButtons = document.querySelectorAll(".dial-btn")
  if (dialButtons.length > 0) {
    dialButtons.forEach((btn, index) => {
      btn.style.animationDelay = `${index * 0.1}s`
      btn.classList.add("emoji-pop")
    })

    // Add pulse animation to call button
    const callBtn = document.querySelector(".call-btn")
    if (callBtn) {
      callBtn.classList.add("animate-pulse")
    }
  }

  // Typing animation for phone header
  const typingTexts = [
    "New emoji message...",
    "Missed call from Sarah...",
    "Sending emoji: 🎮",
    "Call reminder: Mom",
    "Emoji received: ❤️",
  ]

  const typingElement = document.querySelector(".typing-text")
  if (typingElement) {
    let currentTextIndex = 0

    setInterval(() => {
      typingElement.textContent = typingTexts[currentTextIndex]
      currentTextIndex = (currentTextIndex + 1) % typingTexts.length

      // Reset the animation
      typingElement.style.animation = "none"
      void typingElement.offsetWidth // Trigger reflow
      typingElement.style.animation = "typing 3.5s steps(30, end) infinite, blink-caret 0.75s step-end infinite"
    }, 4000)
  }
})

