<template>
  <h1 class="text-8xl">
    We help businesses
    <span class="typed-text font-bold">{{typeValue}}</span>
    <span class="blinking-cursor">|</span>
    <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
  </h1>
</template>

<script>
export default {
    data() {
      return {
        typeValue: "",
        typeStatus: false,
        displayTextArray: ["reach their peaks...", "connect with customers.."],
        typingSpeed: 100,
        erasingSpeed: 100,
        newTextDelay: 2000,
        displayTextArrayIndex: 0,
        charIndex: 0,
      };
    },
    methods: {
      typeText() {
          if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
              if (!this.typeStatus)
                  this.typeStatus = true;
              this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(this.charIndex);
              this.charIndex += 1;
              setTimeout(this.typeText, this.typingSpeed);
          }
          else {
              this.typeStatus = false;
              setTimeout(this.eraseText, this.newTextDelay);
          }
      },
      eraseText() {
          if (this.charIndex > 0) {
              if (!this.typeStatus)
                  this.typeStatus = true;
              this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(0, this.charIndex - 1);
              this.charIndex -= 1;
              setTimeout(this.eraseText, this.erasingSpeed);
          }
          else {
              this.typeStatus = false;
              this.displayTextArrayIndex += 1;
              if (this.displayTextArrayIndex >= this.displayTextArray.length)
                  this.displayTextArrayIndex = 0;
              setTimeout(this.typeText, this.typingSpeed + 1000);
          }
      },
    },
    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    },
}
</script>

<style>
span.typed-text {
  color: #058182;
}

.blinking-cursor {
  font-size: 4.5rem;
  color: #F4F4F4;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
</style>