export const arHeart = `
  <svg version="1.1" height="96" width="96" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <style>
      use { fill: limegreen; animation: .4s infinite ease, color 1s infinite linear alternate;}
      @keyframes color {to {fill: magenta	}}
      @keyframes left {to {transform: translate(-32px, 0)}}
      @keyframes down {to {transform: translate(0, 32px)}}
      @keyframes right {to {transform: translate(32px, 0)}}
      @keyframes up {to {transform: translate(0, -32px)}}
    </style>
    <defs>
      <path id="skull" d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
    </defs>
    <use href="#skull" x="0" y="0"  style="animation-name: down, color"/>
    <use href="#skull" x="32" y="0" style="animation-name: left, color"/>
    <use href="#skull" x="64" y="0" style="animation-name: left, color"/>
    <use href="#skull" x="0" y="32" style="animation-name: down, color"/>
    <use href="#skull" x="0" y="64" style="animation-name: right, color"/>
    <use href="#skull" x="32" y="64" style="animation-name: right, color"/>
    <use href="#skull" x="64" y="64" style="animation-name: up, color"/>
    <use href="#skull" x="64" y="32" style="animation-name: up, color"/>
  </svg>`;
