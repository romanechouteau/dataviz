precision highp float;

uniform float time;
uniform vec2 rez;
uniform float easing;

varying vec2 vUv;

void main() {
   vec4 color1 = vec4(0., 0., 0., 1.);
   vec4 color2 = vec4(0., 0., 0., .0);


   float mixValue = step(vUv.x + easing * .2 - .2 + sin(vUv.y * 5. + easing) * .1 - .1, 1.);

   vec4 finalColor = mix(color1, color2, mixValue);

   gl_FragColor = vec4(finalColor);

}
