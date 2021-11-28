<template>
  <svg class="" style="height: 300px; width: 300px">
    <polygon fill="#feab6b" fill-opacity="1" points="150,200 250,150 150,150"/>
    <rect fill="#feab6b" fill-opacity="1" x="150" y="50" height="100" width="100"/>
    <g transform="translate(150,150)">
      <path d="M0 0 -50 0 A50 50 0 0 1 0 -50" fill="#feab6b"/>
    </g>
    <line stroke="black" x1="0" x2="300" y1="150" y2="150"></line>
    <line stroke="black" x1="150" x2="150" y1="0" y2="300"></line>

    <text x="275" y="143">R</text>
    <line x1="270" x2="270" y1="148" y2="152"></line>

    <text x="215" y="143">R/2</text>
    <line x1="210" x2="210" y1="148" y2="152"></line>

    <text x="90" y="143">-R/2</text>
    <line x1="90" x2="90" y1="148" y2="152"></line>

    <text x="30" y="143">-R</text>
    <line x1="30" x2="30" y1="148" y2="152"></line>

    <text x="150" y="26">R</text>
    <line x1="148" x2="152" y1="30" y2="30"></line>

    <text x="150" y="86">R/2</text>
    <line x1="148" x2="152" y1="90" y2="90"></line>

    <text x="150" y="210">-R/2</text>
    <line x1="148" x2="152" y1="210" y2="210"></line>

    <text x="150" y="280">-R</text>
    <line x1="148" x2="152" y1="270" y2="270"></line>

    <circle r="2" stroke="black" cx="150" cy="150"></circle>


    <polygon fill="black" points="300,150 295,145 295,155" stroke="black"></polygon>
    <polygon fill="black" points="150,0  145,5   155,5" stroke="black"></polygon>
    <slot>

    </slot>
  </svg>
</template>

<script>
export default {
  name: "SvgField"
};
</script>
