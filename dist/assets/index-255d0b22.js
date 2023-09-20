(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const as="153",jn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},No=0,ys=1,Fo=2,Xa=1,qa=2,gn=3,Pn=0,Oe=1,_n=2,Rn=0,mi=1,Ms=2,Es=3,Ss=4,Bo=5,fi=100,Oo=101,zo=102,ws=103,bs=104,Vo=200,Ho=201,Go=202,Wo=203,Ya=204,$a=205,ko=206,Xo=207,qo=208,Yo=209,$o=210,jo=0,Ko=1,Zo=2,Kr=3,Jo=4,Qo=5,tl=6,el=7,ja=0,nl=1,il=2,yn=0,rl=1,sl=2,al=3,ol=4,ll=5,Ka=300,gi=301,_i=302,Zr=303,Jr=304,hr=306,Qr=1e3,Je=1001,ts=1002,Ue=1003,As=1004,vr=1005,qe=1006,cl=1007,Li=1008,Cn=1009,hl=1010,ul=1011,os=1012,Za=1013,An=1014,Tn=1015,Ii=1016,Ja=1017,Qa=1018,Hn=1020,dl=1021,Qe=1023,fl=1024,pl=1025,Gn=1026,xi=1027,ml=1028,to=1029,vl=1030,eo=1031,no=1033,gr=33776,_r=33777,xr=33778,yr=33779,Ts=35840,Rs=35841,Cs=35842,Ps=35843,gl=36196,Ls=37492,Is=37496,Ds=37808,Us=37809,Ns=37810,Fs=37811,Bs=37812,Os=37813,zs=37814,Vs=37815,Hs=37816,Gs=37817,Ws=37818,ks=37819,Xs=37820,qs=37821,Mr=36492,_l=36283,Ys=36284,$s=36285,js=36286,io=3e3,Wn=3001,xl=3200,yl=3201,ro=0,Ml=1,kn="",ne="srgb",en="srgb-linear",so="display-p3",Er=7680,El=519,Sl=512,wl=513,bl=514,Al=515,Tl=516,Rl=517,Cl=518,Pl=519,Ks=35044,Zs="300 es",es=1035,xn=2e3,lr=2001;class $n{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const r=a.indexOf(e);r!==-1&&a.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sr=Math.PI/180,ns=180/Math.PI;function Ni(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function Ll(i,t){return(i%t+t)%t}function wr(i,t,e){return(1-e)*i+e*t}function Js(i){return(i&i-1)===0&&i!==0}function is(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Oi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class re{constructor(t=0,e=0){re.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6],this.y=a[1]*e+a[4]*n+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),a=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*a+t.x,this.y=r*a+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,e,n,a,r,s,o,h,u){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,h,u)}set(t,e,n,a,r,s,o,h,u){const c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=e,c[4]=r,c[5]=h,c[6]=n,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[3],h=n[6],u=n[1],c=n[4],l=n[7],d=n[2],p=n[5],v=n[8],g=a[0],m=a[3],f=a[6],_=a[1],x=a[4],y=a[7],M=a[2],C=a[5],V=a[8];return r[0]=s*g+o*_+h*M,r[3]=s*m+o*x+h*C,r[6]=s*f+o*y+h*V,r[1]=u*g+c*_+l*M,r[4]=u*m+c*x+l*C,r[7]=u*f+c*y+l*V,r[2]=d*g+p*_+v*M,r[5]=d*m+p*x+v*C,r[8]=d*f+p*y+v*V,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],h=t[6],u=t[7],c=t[8];return e*s*c-e*o*u-n*r*c+n*o*h+a*r*u-a*s*h}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],h=t[6],u=t[7],c=t[8],l=c*s-o*u,d=o*h-c*r,p=u*r-s*h,v=e*l+n*d+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=l*g,t[1]=(a*u-c*n)*g,t[2]=(o*n-a*s)*g,t[3]=d*g,t[4]=(c*e-a*h)*g,t[5]=(a*r-o*e)*g,t[6]=p*g,t[7]=(n*h-u*e)*g,t[8]=(s*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,a,r,s,o){const h=Math.cos(r),u=Math.sin(r);return this.set(n*h,n*u,-n*(h*s+u*o)+s+t,-a*u,a*h,-a*(-u*s+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(br.makeScale(t,e)),this}rotate(t){return this.premultiply(br.makeRotation(-t)),this}translate(t,e){return this.premultiply(br.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<9;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const br=new oe;function ao(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Di(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Qs={};function Pi(i){i in Qs||(Qs[i]=!0,console.warn(i))}function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Il=new oe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Dl=new oe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ul(i){return i.convertSRGBToLinear().applyMatrix3(Dl)}function Nl(i){return i.applyMatrix3(Il).convertLinearToSRGB()}const Fl={[en]:i=>i,[ne]:i=>i.convertSRGBToLinear(),[so]:Ul},Bl={[en]:i=>i,[ne]:i=>i.convertLinearToSRGB(),[so]:Nl},Xe={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return en},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Fl[t],a=Bl[e];if(n===void 0||a===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return a(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}};let Zn;class oo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zn===void 0&&(Zn=Di("canvas")),Zn.width=t.width,Zn.height=t.height;const n=Zn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Di("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const a=n.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=vi(r[s]/255)*255;return n.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ol=0;class lo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=Ni(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Tr(a[s].image)):r.push(Tr(a[s]))}else r=Tr(a);n.url=r}return e||(t.images[this.uuid]=n),n}}function Tr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zl=0;class ze extends $n{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=Je,a=Je,r=qe,s=Li,o=Qe,h=Cn,u=ze.DEFAULT_ANISOTROPY,c=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=Ni(),this.name="",this.source=new lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=h,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Wn?ne:kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ka)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qr:t.x=t.x-Math.floor(t.x);break;case Je:t.x=t.x<0?0:1;break;case ts:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qr:t.y=t.y-Math.floor(t.y);break;case Je:t.y=t.y<0?0:1;break;case ts:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ne?Wn:io}set encoding(t){Pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Wn?ne:kn}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Ka;ze.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,n=0,a=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,a){return this.x=t,this.y=e,this.z=n,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*a+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,a,r;const h=t.elements,u=h[0],c=h[4],l=h[8],d=h[1],p=h[5],v=h[9],g=h[2],m=h[6],f=h[10];if(Math.abs(c-d)<.01&&Math.abs(l-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(l+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(u+1)/2,y=(p+1)/2,M=(f+1)/2,C=(c+d)/4,V=(l+g)/4,N=(v+m)/4;return x>y&&x>M?x<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(x),a=C/n,r=V/n):y>M?y<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(y),n=C/a,r=N/a):M<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(M),n=V/r,a=N/r),this.set(n,a,r,e),this}let _=Math.sqrt((m-v)*(m-v)+(l-g)*(l-g)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(l-g)/_,this.z=(d-c)/_,this.w=Math.acos((u+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xn extends $n{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const a={width:t,height:e,depth:1};n.encoding!==void 0&&(Pi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wn?ne:kn),this.texture=new ze(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new lo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class co extends ze{constructor(t=null,e=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vl extends ze{constructor(t=null,e=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qn{constructor(t=0,e=0,n=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=a}static slerpFlat(t,e,n,a,r,s,o){let h=n[a+0],u=n[a+1],c=n[a+2],l=n[a+3];const d=r[s+0],p=r[s+1],v=r[s+2],g=r[s+3];if(o===0){t[e+0]=h,t[e+1]=u,t[e+2]=c,t[e+3]=l;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=v,t[e+3]=g;return}if(l!==g||h!==d||u!==p||c!==v){let m=1-o;const f=h*d+u*p+c*v+l*g,_=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const M=Math.sqrt(x),C=Math.atan2(M,f*_);m=Math.sin(m*C)/M,o=Math.sin(o*C)/M}const y=o*_;if(h=h*m+d*y,u=u*m+p*y,c=c*m+v*y,l=l*m+g*y,m===1-o){const M=1/Math.sqrt(h*h+u*u+c*c+l*l);h*=M,u*=M,c*=M,l*=M}}t[e]=h,t[e+1]=u,t[e+2]=c,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,a,r,s){const o=n[a],h=n[a+1],u=n[a+2],c=n[a+3],l=r[s],d=r[s+1],p=r[s+2],v=r[s+3];return t[e]=o*v+c*l+h*p-u*d,t[e+1]=h*v+c*d+u*l-o*p,t[e+2]=u*v+c*p+o*d-h*l,t[e+3]=c*v-o*l-h*d-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,a){return this._x=t,this._y=e,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,h=Math.sin,u=o(n/2),c=o(a/2),l=o(r/2),d=h(n/2),p=h(a/2),v=h(r/2);switch(s){case"XYZ":this._x=d*c*l+u*p*v,this._y=u*p*l-d*c*v,this._z=u*c*v+d*p*l,this._w=u*c*l-d*p*v;break;case"YXZ":this._x=d*c*l+u*p*v,this._y=u*p*l-d*c*v,this._z=u*c*v-d*p*l,this._w=u*c*l+d*p*v;break;case"ZXY":this._x=d*c*l-u*p*v,this._y=u*p*l+d*c*v,this._z=u*c*v+d*p*l,this._w=u*c*l-d*p*v;break;case"ZYX":this._x=d*c*l-u*p*v,this._y=u*p*l+d*c*v,this._z=u*c*v-d*p*l,this._w=u*c*l+d*p*v;break;case"YZX":this._x=d*c*l+u*p*v,this._y=u*p*l+d*c*v,this._z=u*c*v-d*p*l,this._w=u*c*l-d*p*v;break;case"XZY":this._x=d*c*l-u*p*v,this._y=u*p*l-d*c*v,this._z=u*c*v+d*p*l,this._w=u*c*l+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,a=Math.sin(n);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],a=e[4],r=e[8],s=e[1],o=e[5],h=e[9],u=e[2],c=e[6],l=e[10],d=n+o+l;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-h)*p,this._y=(r-u)*p,this._z=(s-a)*p}else if(n>o&&n>l){const p=2*Math.sqrt(1+n-o-l);this._w=(c-h)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+u)/p}else if(o>l){const p=2*Math.sqrt(1+o-n-l);this._w=(r-u)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(h+c)/p}else{const p=2*Math.sqrt(1+l-n-o);this._w=(s-a)/p,this._x=(r+u)/p,this._y=(h+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const a=Math.min(1,e/n);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,a=t._y,r=t._z,s=t._w,o=e._x,h=e._y,u=e._z,c=e._w;return this._x=n*c+s*o+a*u-r*h,this._y=a*c+s*h+r*o-n*u,this._z=r*c+s*u+n*h-a*o,this._w=s*c-n*o-a*h-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+n*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=n,this._y=a,this._z=r,this;const h=1-o*o;if(h<=Number.EPSILON){const p=1-e;return this._w=p*s+e*this._w,this._x=p*n+e*this._x,this._y=p*a+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(h),c=Math.atan2(u,o),l=Math.sin((1-e)*c)/u,d=Math.sin(e*c)/u;return this._w=s*l+this._w*d,this._x=n*l+this._x*d,this._y=a*l+this._y*d,this._z=r*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),a=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(a),n*Math.sin(r),n*Math.cos(r),e*Math.sin(a))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(t=0,e=0,n=0){at.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ta.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ta.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*a,this.y=r[1]*e+r[4]*n+r[7]*a,this.z=r[2]*e+r[5]*n+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,a=this.z,r=t.x,s=t.y,o=t.z,h=t.w,u=h*e+s*a-o*n,c=h*n+o*e-r*a,l=h*a+r*n-s*e,d=-r*e-s*n-o*a;return this.x=u*h+d*-r+c*-o-l*-s,this.y=c*h+d*-s+l*-r-u*-o,this.z=l*h+d*-o+u*-s-c*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*a,this.y=r[1]*e+r[5]*n+r[9]*a,this.z=r[2]*e+r[6]*n+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,a=t.y,r=t.z,s=e.x,o=e.y,h=e.z;return this.x=a*h-r*o,this.y=r*s-n*h,this.z=n*o-a*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rr.copy(this).projectOnVector(t),this.sub(Rr)}reflect(t){return this.sub(Rr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,a=this.z-t.z;return e*e+n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const a=Math.sin(e)*t;return this.x=a*Math.sin(n),this.y=Math.cos(e)*t,this.z=a*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rr=new at,ta=new qn;class Fi{constructor(t=new at(1/0,1/0,1/0),e=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Jn.copy(t.boundingBox),Jn.applyMatrix4(t.matrixWorld),this.union(Jn);else{const a=t.geometry;if(a!==void 0)if(e&&a.attributes!==void 0&&a.attributes.position!==void 0){const r=a.attributes.position;for(let s=0,o=r.count;s<o;s++)dn.fromBufferAttribute(r,s).applyMatrix4(t.matrixWorld),this.expandByPoint(dn)}else a.boundingBox===null&&a.computeBoundingBox(),Jn.copy(a.boundingBox),Jn.applyMatrix4(t.matrixWorld),this.union(Jn)}const n=t.children;for(let a=0,r=n.length;a<r;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bi),zi.subVectors(this.max,bi),Qn.subVectors(t.a,bi),ti.subVectors(t.b,bi),ei.subVectors(t.c,bi),En.subVectors(ti,Qn),Sn.subVectors(ei,ti),Un.subVectors(Qn,ei);let e=[0,-En.z,En.y,0,-Sn.z,Sn.y,0,-Un.z,Un.y,En.z,0,-En.x,Sn.z,0,-Sn.x,Un.z,0,-Un.x,-En.y,En.x,0,-Sn.y,Sn.x,0,-Un.y,Un.x,0];return!Cr(e,Qn,ti,ei,zi)||(e=[1,0,0,0,1,0,0,0,1],!Cr(e,Qn,ti,ei,zi))?!1:(Vi.crossVectors(En,Sn),e=[Vi.x,Vi.y,Vi.z],Cr(e,Qn,ti,ei,zi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new at,new at,new at,new at,new at,new at,new at,new at],dn=new at,Jn=new Fi,Qn=new at,ti=new at,ei=new at,En=new at,Sn=new at,Un=new at,bi=new at,zi=new at,Vi=new at,Nn=new at;function Cr(i,t,e,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){Nn.fromArray(i,r);const o=a.x*Math.abs(Nn.x)+a.y*Math.abs(Nn.y)+a.z*Math.abs(Nn.z),h=t.dot(Nn),u=e.dot(Nn),c=n.dot(Nn);if(Math.max(-Math.max(h,u,c),Math.min(h,u,c))>o)return!1}return!0}const Hl=new Fi,Ai=new at,Pr=new at;class ls{constructor(t=new at,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hl.setFromPoints(t).getCenter(n);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ai.subVectors(t,this.center);const e=Ai.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),a=(n-this.radius)*.5;this.center.addScaledVector(Ai,a/n),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ai.copy(t.center).add(Pr)),this.expandByPoint(Ai.copy(t.center).sub(Pr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new at,Lr=new at,Hi=new at,wn=new at,Ir=new at,Gi=new at,Dr=new at;class Gl{constructor(t=new at,e=new at(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,a){Lr.copy(t).add(e).multiplyScalar(.5),Hi.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(Lr);const r=t.distanceTo(e)*.5,s=-this.direction.dot(Hi),o=wn.dot(this.direction),h=-wn.dot(Hi),u=wn.lengthSq(),c=Math.abs(1-s*s);let l,d,p,v;if(c>0)if(l=s*h-o,d=s*o-h,v=r*c,l>=0)if(d>=-v)if(d<=v){const g=1/c;l*=g,d*=g,p=l*(l+s*d+2*o)+d*(s*l+d+2*h)+u}else d=r,l=Math.max(0,-(s*d+o)),p=-l*l+d*(d+2*h)+u;else d=-r,l=Math.max(0,-(s*d+o)),p=-l*l+d*(d+2*h)+u;else d<=-v?(l=Math.max(0,-(-s*r+o)),d=l>0?-r:Math.min(Math.max(-r,-h),r),p=-l*l+d*(d+2*h)+u):d<=v?(l=0,d=Math.min(Math.max(-r,-h),r),p=d*(d+2*h)+u):(l=Math.max(0,-(s*r+o)),d=l>0?r:Math.min(Math.max(-r,-h),r),p=-l*l+d*(d+2*h)+u);else d=s>0?-r:r,l=Math.max(0,-(s*d+o)),p=-l*l+d*(d+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),a&&a.copy(Lr).addScaledVector(Hi,d),p}intersectSphere(t,e){fn.subVectors(t.center,this.origin);const n=fn.dot(this.direction),a=fn.dot(fn)-n*n,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,h=n+s;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,a,r,s,o,h;const u=1/this.direction.x,c=1/this.direction.y,l=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,a=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,a=(t.min.x-d.x)*u),c>=0?(r=(t.min.y-d.y)*c,s=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,s=(t.min.y-d.y)*c),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),l>=0?(o=(t.min.z-d.z)*l,h=(t.max.z-d.z)*l):(o=(t.max.z-d.z)*l,h=(t.min.z-d.z)*l),n>h||o>a)||((o>n||n!==n)&&(n=o),(h<a||a!==a)&&(a=h),a<0)?null:this.at(n>=0?n:a,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,a,r){Ir.subVectors(e,t),Gi.subVectors(n,t),Dr.crossVectors(Ir,Gi);let s=this.direction.dot(Dr),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;wn.subVectors(this.origin,t);const h=o*this.direction.dot(Gi.crossVectors(wn,Gi));if(h<0)return null;const u=o*this.direction.dot(Ir.cross(wn));if(u<0||h+u>s)return null;const c=-o*wn.dot(Dr);return c<0?null:this.at(c/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(t,e,n,a,r,s,o,h,u,c,l,d,p,v,g,m){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,h,u,c,l,d,p,v,g,m)}set(t,e,n,a,r,s,o,h,u,c,l,d,p,v,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=a,f[1]=r,f[5]=s,f[9]=o,f[13]=h,f[2]=u,f[6]=c,f[10]=l,f[14]=d,f[3]=p,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,a=1/ni.setFromMatrixColumn(t,0).length(),r=1/ni.setFromMatrixColumn(t,1).length(),s=1/ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*a,e[1]=n[1]*a,e[2]=n[2]*a,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,a=t.y,r=t.z,s=Math.cos(n),o=Math.sin(n),h=Math.cos(a),u=Math.sin(a),c=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const d=s*c,p=s*l,v=o*c,g=o*l;e[0]=h*c,e[4]=-h*l,e[8]=u,e[1]=p+v*u,e[5]=d-g*u,e[9]=-o*h,e[2]=g-d*u,e[6]=v+p*u,e[10]=s*h}else if(t.order==="YXZ"){const d=h*c,p=h*l,v=u*c,g=u*l;e[0]=d+g*o,e[4]=v*o-p,e[8]=s*u,e[1]=s*l,e[5]=s*c,e[9]=-o,e[2]=p*o-v,e[6]=g+d*o,e[10]=s*h}else if(t.order==="ZXY"){const d=h*c,p=h*l,v=u*c,g=u*l;e[0]=d-g*o,e[4]=-s*l,e[8]=v+p*o,e[1]=p+v*o,e[5]=s*c,e[9]=g-d*o,e[2]=-s*u,e[6]=o,e[10]=s*h}else if(t.order==="ZYX"){const d=s*c,p=s*l,v=o*c,g=o*l;e[0]=h*c,e[4]=v*u-p,e[8]=d*u+g,e[1]=h*l,e[5]=g*u+d,e[9]=p*u-v,e[2]=-u,e[6]=o*h,e[10]=s*h}else if(t.order==="YZX"){const d=s*h,p=s*u,v=o*h,g=o*u;e[0]=h*c,e[4]=g-d*l,e[8]=v*l+p,e[1]=l,e[5]=s*c,e[9]=-o*c,e[2]=-u*c,e[6]=p*l+v,e[10]=d-g*l}else if(t.order==="XZY"){const d=s*h,p=s*u,v=o*h,g=o*u;e[0]=h*c,e[4]=-l,e[8]=u*c,e[1]=d*l+g,e[5]=s*c,e[9]=p*l-v,e[2]=v*l-p,e[6]=o*c,e[10]=g*l+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wl,t,kl)}lookAt(t,e,n){const a=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),bn.crossVectors(n,Ge),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),bn.crossVectors(n,Ge)),bn.normalize(),Wi.crossVectors(Ge,bn),a[0]=bn.x,a[4]=Wi.x,a[8]=Ge.x,a[1]=bn.y,a[5]=Wi.y,a[9]=Ge.y,a[2]=bn.z,a[6]=Wi.z,a[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[4],h=n[8],u=n[12],c=n[1],l=n[5],d=n[9],p=n[13],v=n[2],g=n[6],m=n[10],f=n[14],_=n[3],x=n[7],y=n[11],M=n[15],C=a[0],V=a[4],N=a[8],E=a[12],S=a[1],I=a[5],W=a[9],D=a[13],k=a[2],X=a[6],st=a[10],F=a[14],U=a[3],Z=a[7],Y=a[11],O=a[15];return r[0]=s*C+o*S+h*k+u*U,r[4]=s*V+o*I+h*X+u*Z,r[8]=s*N+o*W+h*st+u*Y,r[12]=s*E+o*D+h*F+u*O,r[1]=c*C+l*S+d*k+p*U,r[5]=c*V+l*I+d*X+p*Z,r[9]=c*N+l*W+d*st+p*Y,r[13]=c*E+l*D+d*F+p*O,r[2]=v*C+g*S+m*k+f*U,r[6]=v*V+g*I+m*X+f*Z,r[10]=v*N+g*W+m*st+f*Y,r[14]=v*E+g*D+m*F+f*O,r[3]=_*C+x*S+y*k+M*U,r[7]=_*V+x*I+y*X+M*Z,r[11]=_*N+x*W+y*st+M*Y,r[15]=_*E+x*D+y*F+M*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],a=t[8],r=t[12],s=t[1],o=t[5],h=t[9],u=t[13],c=t[2],l=t[6],d=t[10],p=t[14],v=t[3],g=t[7],m=t[11],f=t[15];return v*(+r*h*l-a*u*l-r*o*d+n*u*d+a*o*p-n*h*p)+g*(+e*h*p-e*u*d+r*s*d-a*s*p+a*u*c-r*h*c)+m*(+e*u*l-e*o*p-r*s*l+n*s*p+r*o*c-n*u*c)+f*(-a*o*c-e*h*l+e*o*d+a*s*l-n*s*d+n*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],h=t[6],u=t[7],c=t[8],l=t[9],d=t[10],p=t[11],v=t[12],g=t[13],m=t[14],f=t[15],_=l*m*u-g*d*u+g*h*p-o*m*p-l*h*f+o*d*f,x=v*d*u-c*m*u-v*h*p+s*m*p+c*h*f-s*d*f,y=c*g*u-v*l*u+v*o*p-s*g*p-c*o*f+s*l*f,M=v*l*h-c*g*h-v*o*d+s*g*d+c*o*m-s*l*m,C=e*_+n*x+a*y+r*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/C;return t[0]=_*V,t[1]=(g*d*r-l*m*r-g*a*p+n*m*p+l*a*f-n*d*f)*V,t[2]=(o*m*r-g*h*r+g*a*u-n*m*u-o*a*f+n*h*f)*V,t[3]=(l*h*r-o*d*r-l*a*u+n*d*u+o*a*p-n*h*p)*V,t[4]=x*V,t[5]=(c*m*r-v*d*r+v*a*p-e*m*p-c*a*f+e*d*f)*V,t[6]=(v*h*r-s*m*r-v*a*u+e*m*u+s*a*f-e*h*f)*V,t[7]=(s*d*r-c*h*r+c*a*u-e*d*u-s*a*p+e*h*p)*V,t[8]=y*V,t[9]=(v*l*r-c*g*r-v*n*p+e*g*p+c*n*f-e*l*f)*V,t[10]=(s*g*r-v*o*r+v*n*u-e*g*u-s*n*f+e*o*f)*V,t[11]=(c*o*r-s*l*r-c*n*u+e*l*u+s*n*p-e*o*p)*V,t[12]=M*V,t[13]=(c*g*a-v*l*a+v*n*d-e*g*d-c*n*m+e*l*m)*V,t[14]=(v*o*a-s*g*a-v*n*h+e*g*h+s*n*m-e*o*m)*V,t[15]=(s*l*a-c*o*a+c*n*h-e*l*h-s*n*d+e*o*d)*V,this}scale(t){const e=this.elements,n=t.x,a=t.y,r=t.z;return e[0]*=n,e[4]*=a,e[8]*=r,e[1]*=n,e[5]*=a,e[9]*=r,e[2]*=n,e[6]*=a,e[10]*=r,e[3]*=n,e[7]*=a,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,a))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),a=Math.sin(e),r=1-n,s=t.x,o=t.y,h=t.z,u=r*s,c=r*o;return this.set(u*s+n,u*o-a*h,u*h+a*o,0,u*o+a*h,c*o+n,c*h-a*s,0,u*h-a*o,c*h+a*s,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,a,r,s){return this.set(1,n,r,0,t,1,s,0,e,a,1,0,0,0,0,1),this}compose(t,e,n){const a=this.elements,r=e._x,s=e._y,o=e._z,h=e._w,u=r+r,c=s+s,l=o+o,d=r*u,p=r*c,v=r*l,g=s*c,m=s*l,f=o*l,_=h*u,x=h*c,y=h*l,M=n.x,C=n.y,V=n.z;return a[0]=(1-(g+f))*M,a[1]=(p+y)*M,a[2]=(v-x)*M,a[3]=0,a[4]=(p-y)*C,a[5]=(1-(d+f))*C,a[6]=(m+_)*C,a[7]=0,a[8]=(v+x)*V,a[9]=(m-_)*V,a[10]=(1-(d+g))*V,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,n){const a=this.elements;let r=ni.set(a[0],a[1],a[2]).length();const s=ni.set(a[4],a[5],a[6]).length(),o=ni.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],$e.copy(this);const u=1/r,c=1/s,l=1/o;return $e.elements[0]*=u,$e.elements[1]*=u,$e.elements[2]*=u,$e.elements[4]*=c,$e.elements[5]*=c,$e.elements[6]*=c,$e.elements[8]*=l,$e.elements[9]*=l,$e.elements[10]*=l,e.setFromRotationMatrix($e),n.x=r,n.y=s,n.z=o,this}makePerspective(t,e,n,a,r,s,o=xn){const h=this.elements,u=2*r/(e-t),c=2*r/(n-a),l=(e+t)/(e-t),d=(n+a)/(n-a);let p,v;if(o===xn)p=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===lr)p=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=l,h[12]=0,h[1]=0,h[5]=c,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,a,r,s,o=xn){const h=this.elements,u=1/(e-t),c=1/(n-a),l=1/(s-r),d=(e+t)*u,p=(n+a)*c;let v,g;if(o===xn)v=(s+r)*l,g=-2*l;else if(o===lr)v=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=2*u,h[4]=0,h[8]=0,h[12]=-d,h[1]=0,h[5]=2*c,h[9]=0,h[13]=-p,h[2]=0,h[6]=0,h[10]=g,h[14]=-v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<16;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ni=new at,$e=new Ee,Wl=new at(0,0,0),kl=new at(1,1,1),bn=new at,Wi=new at,Ge=new at,ea=new Ee,na=new qn;class ur{constructor(t=0,e=0,n=0,a=ur.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,a=this._order){return this._x=t,this._y=e,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],h=a[1],u=a[5],c=a[9],l=a[2],d=a[6],p=a[10];switch(e){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ne(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ea.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ea,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return na.setFromEuler(this),this.setFromQuaternion(na,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ur.DEFAULT_ORDER="XYZ";class ho{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xl=0;const ia=new at,ii=new qn,pn=new Ee,ki=new at,Ti=new at,ql=new at,Yl=new qn,ra=new at(1,0,0),sa=new at(0,1,0),aa=new at(0,0,1),$l={type:"added"},oa={type:"removed"};class Ie extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new at,e=new ur,n=new qn,a=new at(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ee},normalMatrix:{value:new oe}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.multiply(ii),this}rotateOnWorldAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.premultiply(ii),this}rotateX(t){return this.rotateOnAxis(ra,t)}rotateY(t){return this.rotateOnAxis(sa,t)}rotateZ(t){return this.rotateOnAxis(aa,t)}translateOnAxis(t,e){return ia.copy(t).applyQuaternion(this.quaternion),this.position.add(ia.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ra,t)}translateY(t){return this.translateOnAxis(sa,t)}translateZ(t){return this.translateOnAxis(aa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ki.copy(t):ki.set(t,e,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Ti,ki,this.up):pn.lookAt(ki,Ti,this.up),this.quaternion.setFromRotationMatrix(pn),a&&(pn.extractRotation(a.matrixWorld),ii.setFromRotationMatrix(pn),this.quaternion.premultiply(ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent($l)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(oa)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(oa)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let a=0,r=this.children.length;a<r;a++){const s=this.children[a].getObjectsByProperty(t,e);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,t,ql),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,Yl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,a=e.length;n<a;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++){const o=a[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let u=0,c=h.length;u<c;u++){const l=h[u];r(t.shapes,l)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,u=this.material.length;h<u;h++)o.push(r(t.materials,this.material[h]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];a.animations.push(r(t.animations,h))}}if(e){const o=s(t.geometries),h=s(t.materials),u=s(t.textures),c=s(t.images),l=s(t.shapes),d=s(t.skeletons),p=s(t.animations),v=s(t.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),l.length>0&&(n.shapes=l),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=a,n;function s(o){const h=[];for(const u in o){const c=o[u];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const a=t.children[n];this.add(a.clone())}return this}}Ie.DEFAULT_UP=new at(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new at,mn=new at,Ur=new at,vn=new at,ri=new at,si=new at,la=new at,Nr=new at,Fr=new at,Br=new at;let Xi=!1;class Ze{constructor(t=new at,e=new at,n=new at){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,a){a.subVectors(n,e),je.subVectors(t,e),a.cross(je);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,e,n,a,r){je.subVectors(a,e),mn.subVectors(n,e),Ur.subVectors(t,e);const s=je.dot(je),o=je.dot(mn),h=je.dot(Ur),u=mn.dot(mn),c=mn.dot(Ur),l=s*u-o*o;if(l===0)return r.set(-2,-1,-1);const d=1/l,p=(u*h-o*c)*d,v=(s*c-o*h)*d;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,a){return this.getBarycoord(t,e,n,a,vn),vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getUV(t,e,n,a,r,s,o,h){return Xi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xi=!0),this.getInterpolation(t,e,n,a,r,s,o,h)}static getInterpolation(t,e,n,a,r,s,o,h){return this.getBarycoord(t,e,n,a,vn),h.setScalar(0),h.addScaledVector(r,vn.x),h.addScaledVector(s,vn.y),h.addScaledVector(o,vn.z),h}static isFrontFacing(t,e,n,a){return je.subVectors(n,e),mn.subVectors(t,e),je.cross(mn).dot(a)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,a){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,n,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),je.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,a,r){return Xi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xi=!0),Ze.getInterpolation(t,this.a,this.b,this.c,e,n,a,r)}getInterpolation(t,e,n,a,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,a,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,a=this.b,r=this.c;let s,o;ri.subVectors(a,n),si.subVectors(r,n),Nr.subVectors(t,n);const h=ri.dot(Nr),u=si.dot(Nr);if(h<=0&&u<=0)return e.copy(n);Fr.subVectors(t,a);const c=ri.dot(Fr),l=si.dot(Fr);if(c>=0&&l<=c)return e.copy(a);const d=h*l-c*u;if(d<=0&&h>=0&&c<=0)return s=h/(h-c),e.copy(n).addScaledVector(ri,s);Br.subVectors(t,r);const p=ri.dot(Br),v=si.dot(Br);if(v>=0&&p<=v)return e.copy(r);const g=p*u-h*v;if(g<=0&&u>=0&&v<=0)return o=u/(u-v),e.copy(n).addScaledVector(si,o);const m=c*v-p*l;if(m<=0&&l-c>=0&&p-v>=0)return la.subVectors(r,a),o=(l-c)/(l-c+(p-v)),e.copy(a).addScaledVector(la,o);const f=1/(m+g+d);return s=g*f,o=d*f,e.copy(n).addScaledVector(ri,s).addScaledVector(si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let jl=0;class Bi extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=mi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ya,this.blendDst=$a,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const h=r[o];delete h.metadata,s.push(h)}return s}if(e){const r=a(t.textures),s=a(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const a=e.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const uo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ke={h:0,s:0,l:0},qi={h:0,s:0,l:0};function Or(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class de{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,a=Xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xe.toWorkingColorSpace(this,a),this}setHSL(t,e,n,a=Xe.workingColorSpace){if(t=Ll(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=Or(s,r,t+1/3),this.g=Or(s,r,t),this.b=Or(s,r,t-1/3)}return Xe.toWorkingColorSpace(this,a),this}setStyle(t,e=ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ne){const n=uo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ne){return Xe.fromWorkingColorSpace(Le.copy(this),t),Math.round(Ne(Le.r*255,0,255))*65536+Math.round(Ne(Le.g*255,0,255))*256+Math.round(Ne(Le.b*255,0,255))}getHexString(t=ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,a=Le.g,r=Le.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let h,u;const c=(o+s)/2;if(o===s)h=0,u=0;else{const l=s-o;switch(u=c<=.5?l/(s+o):l/(2-s-o),s){case n:h=(a-r)/l+(a<r?6:0);break;case a:h=(r-n)/l+2;break;case r:h=(n-a)/l+4;break}h/=6}return t.h=h,t.s=u,t.l=c,t}getRGB(t,e=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=ne){Xe.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,a=Le.b;return t!==ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(t,e,n){return this.getHSL(Ke),Ke.h+=t,Ke.s+=e,Ke.l+=n,this.setHSL(Ke.h,Ke.s,Ke.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ke),t.getHSL(qi);const n=wr(Ke.h,qi.h,e),a=wr(Ke.s,qi.s,e),r=wr(Ke.l,qi.l,e);return this.setHSL(n,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,a=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*a,this.g=r[1]*e+r[4]*n+r[7]*a,this.b=r[2]*e+r[5]*n+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new de;de.NAMES=uo;class fo extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new at,Yi=new re;class on{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ks,this.updateRange={offset:0,count:-1},this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=e.array[n+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yi.fromBufferAttribute(this,e),Yi.applyMatrix3(t),this.setXY(e,Yi.x,Yi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,a){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),a=He(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this}setXYZW(t,e,n,a,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),a=He(a,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ks&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class po extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mo extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ln extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kl=0;const ke=new Ee,zr=new Ie,ai=new at,We=new Fi,Ri=new Fi,be=new at;class In extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ao(t)?mo:po)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return zr.lookAt(t),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(t){const e=[];for(let n=0,a=t.length;n<a;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ln(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,a=e.length;n<a;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new at,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];Ri.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(We.min,Ri.min),We.expandByPoint(be),be.addVectors(We.max,Ri.max),We.expandByPoint(be)):(We.expandByPoint(Ri.min),We.expandByPoint(Ri.max))}We.getCenter(n);let a=0;for(let r=0,s=t.count;r<s;r++)be.fromBufferAttribute(t,r),a=Math.max(a,n.distanceToSquared(be));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],h=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)be.fromBufferAttribute(o,u),h&&(ai.fromBufferAttribute(t,u),be.add(ai)),a=Math.max(a,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,a=e.position.array,r=e.normal.array,s=e.uv.array,o=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*o),4));const h=this.getAttribute("tangent").array,u=[],c=[];for(let S=0;S<o;S++)u[S]=new at,c[S]=new at;const l=new at,d=new at,p=new at,v=new re,g=new re,m=new re,f=new at,_=new at;function x(S,I,W){l.fromArray(a,S*3),d.fromArray(a,I*3),p.fromArray(a,W*3),v.fromArray(s,S*2),g.fromArray(s,I*2),m.fromArray(s,W*2),d.sub(l),p.sub(l),g.sub(v),m.sub(v);const D=1/(g.x*m.y-m.x*g.y);isFinite(D)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(D),_.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(D),u[S].add(f),u[I].add(f),u[W].add(f),c[S].add(_),c[I].add(_),c[W].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let S=0,I=y.length;S<I;++S){const W=y[S],D=W.start,k=W.count;for(let X=D,st=D+k;X<st;X+=3)x(n[X+0],n[X+1],n[X+2])}const M=new at,C=new at,V=new at,N=new at;function E(S){V.fromArray(r,S*3),N.copy(V);const I=u[S];M.copy(I),M.sub(V.multiplyScalar(V.dot(I))).normalize(),C.crossVectors(N,I);const D=C.dot(c[S])<0?-1:1;h[S*4]=M.x,h[S*4+1]=M.y,h[S*4+2]=M.z,h[S*4+3]=D}for(let S=0,I=y.length;S<I;++S){const W=y[S],D=W.start,k=W.count;for(let X=D,st=D+k;X<st;X+=3)E(n[X+0]),E(n[X+1]),E(n[X+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const a=new at,r=new at,s=new at,o=new at,h=new at,u=new at,c=new at,l=new at;if(t)for(let d=0,p=t.count;d<p;d+=3){const v=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),c.subVectors(s,r),l.subVectors(a,r),c.cross(l),o.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),o.add(c),h.add(c),u.add(c),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,h.x,h.y,h.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=e.count;d<p;d+=3)a.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),s.fromBufferAttribute(e,d+2),c.subVectors(s,r),l.subVectors(a,r),c.cross(l),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,h){const u=o.array,c=o.itemSize,l=o.normalized,d=new u.constructor(h.length*c);let p=0,v=0;for(let g=0,m=h.length;g<m;g++){o.isInterleavedBufferAttribute?p=h[g]*o.data.stride+o.offset:p=h[g]*c;for(let f=0;f<c;f++)d[v++]=u[p++]}return new on(d,c,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new In,n=this.index.array,a=this.attributes;for(const o in a){const h=a[o],u=t(h,n);e.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const h=[],u=r[o];for(let c=0,l=u.length;c<l;c++){const d=u[c],p=t(d,n);h.push(p)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,h=s.length;o<h;o++){const u=s[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const u=n[h];t.data.attributes[h]=u.toJSON(t.data)}const a={};let r=!1;for(const h in this.morphAttributes){const u=this.morphAttributes[h],c=[];for(let l=0,d=u.length;l<d;l++){const p=u[l];c.push(p.toJSON(t.data))}c.length>0&&(a[h]=c,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const a=t.attributes;for(const u in a){const c=a[u];this.setAttribute(u,c.clone(e))}const r=t.morphAttributes;for(const u in r){const c=[],l=r[u];for(let d=0,p=l.length;d<p;d++)c.push(l[d].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let u=0,c=s.length;u<c;u++){const l=s[u];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ca=new Ee,Fn=new Gl,$i=new ls,ha=new at,oi=new at,li=new at,ci=new at,Vr=new at,ji=new at,Ki=new re,Zi=new re,Ji=new re,ua=new at,da=new at,fa=new at,Qi=new at,tr=new at;class tn extends Ie{constructor(t=new In,e=new fo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){ji.set(0,0,0);for(let h=0,u=r.length;h<u;h++){const c=o[h],l=r[h];c!==0&&(Vr.fromBufferAttribute(l,t),s?ji.addScaledVector(Vr,c):ji.addScaledVector(Vr.sub(e),c))}e.add(ji)}return e}raycast(t,e){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(r),Fn.copy(t.ray).recast(t.near),!($i.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere($i,ha)===null||Fn.origin.distanceToSquared(ha)>(t.far-t.near)**2))&&(ca.copy(r).invert(),Fn.copy(t.ray).applyMatrix4(ca),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fn)))}_computeIntersections(t,e,n){let a;const r=this.geometry,s=this.material,o=r.index,h=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,l=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,g=d.length;v<g;v++){const m=d[v],f=s[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,M=x;y<M;y+=3){const C=o.getX(y),V=o.getX(y+1),N=o.getX(y+2);a=er(this,f,t,n,u,c,l,C,V,N),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const _=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);a=er(this,s,t,n,u,c,l,_,x,y),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}else if(h!==void 0)if(Array.isArray(s))for(let v=0,g=d.length;v<g;v++){const m=d[v],f=s[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(h.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,M=x;y<M;y+=3){const C=y,V=y+1,N=y+2;a=er(this,f,t,n,u,c,l,C,V,N),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const v=Math.max(0,p.start),g=Math.min(h.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const _=m,x=m+1,y=m+2;a=er(this,s,t,n,u,c,l,_,x,y),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}}}function Zl(i,t,e,n,a,r,s,o){let h;if(t.side===Oe?h=n.intersectTriangle(s,r,a,!0,o):h=n.intersectTriangle(a,r,s,t.side===Pn,o),h===null)return null;tr.copy(o),tr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(tr);return u<e.near||u>e.far?null:{distance:u,point:tr.clone(),object:i}}function er(i,t,e,n,a,r,s,o,h,u){i.getVertexPosition(o,oi),i.getVertexPosition(h,li),i.getVertexPosition(u,ci);const c=Zl(i,t,e,n,oi,li,ci,Qi);if(c){a&&(Ki.fromBufferAttribute(a,o),Zi.fromBufferAttribute(a,h),Ji.fromBufferAttribute(a,u),c.uv=Ze.getInterpolation(Qi,oi,li,ci,Ki,Zi,Ji,new re)),r&&(Ki.fromBufferAttribute(r,o),Zi.fromBufferAttribute(r,h),Ji.fromBufferAttribute(r,u),c.uv1=Ze.getInterpolation(Qi,oi,li,ci,Ki,Zi,Ji,new re),c.uv2=c.uv1),s&&(ua.fromBufferAttribute(s,o),da.fromBufferAttribute(s,h),fa.fromBufferAttribute(s,u),c.normal=Ze.getInterpolation(Qi,oi,li,ci,ua,da,fa,new at),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const l={a:o,b:h,c:u,normal:new at,materialIndex:0};Ze.getNormal(oi,li,ci,l.normal),c.face=l}return c}class Ei extends In{constructor(t=1,e=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const h=[],u=[],c=[],l=[];let d=0,p=0;v("z","y","x",-1,-1,n,e,t,s,r,0),v("z","y","x",1,-1,n,e,-t,s,r,1),v("x","z","y",1,1,t,n,e,a,s,2),v("x","z","y",1,-1,t,n,-e,a,s,3),v("x","y","z",1,-1,t,e,n,a,r,4),v("x","y","z",-1,-1,t,e,-n,a,r,5),this.setIndex(h),this.setAttribute("position",new ln(u,3)),this.setAttribute("normal",new ln(c,3)),this.setAttribute("uv",new ln(l,2));function v(g,m,f,_,x,y,M,C,V,N,E){const S=y/V,I=M/N,W=y/2,D=M/2,k=C/2,X=V+1,st=N+1;let F=0,U=0;const Z=new at;for(let Y=0;Y<st;Y++){const O=Y*I-D;for(let L=0;L<X;L++){const R=L*S-W;Z[g]=R*_,Z[m]=O*x,Z[f]=k,u.push(Z.x,Z.y,Z.z),Z[g]=0,Z[m]=0,Z[f]=C>0?1:-1,c.push(Z.x,Z.y,Z.z),l.push(L/V),l.push(1-Y/N),F+=1}}for(let Y=0;Y<N;Y++)for(let O=0;O<V;O++){const L=d+O+X*Y,R=d+O+X*(Y+1),A=d+(O+1)+X*(Y+1),T=d+(O+1)+X*Y;h.push(L,R,T),h.push(R,A,T),U+=6}o.addGroup(p,U,E),p+=U,d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function yi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const a=i[e][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=a.clone():Array.isArray(a)?t[e][n]=a.slice():t[e][n]=a}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=yi(i[e]);for(const a in n)t[a]=n[a]}return t}function Jl(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vo(i){return i.getRenderTarget()===null?i.outputColorSpace:en}const Ql={clone:yi,merge:De};var tc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ec=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tc,this.fragmentShader=ec,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yi(t.uniforms),this.uniformsGroups=Jl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?e.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[a]={type:"m4",value:s.toArray()}:e.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class go extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ye extends go{constructor(t=50,e=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,a,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*e,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const h=s.fullWidth,u=s.fullHeight;r+=s.offsetX*a/h,e-=s.offsetY*n/u,a*=s.width/h,n*=s.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hi=-90,ui=1;class nc extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const a=new Ye(hi,ui,t,e);a.layers=this.layers,this.add(a);const r=new Ye(hi,ui,t,e);r.layers=this.layers,this.add(r);const s=new Ye(hi,ui,t,e);s.layers=this.layers,this.add(s);const o=new Ye(hi,ui,t,e);o.layers=this.layers,this.add(o);const h=new Ye(hi,ui,t,e);h.layers=this.layers,this.add(h);const u=new Ye(hi,ui,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,a,r,s,o,h]=e;for(const u of e)this.remove(u);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,s,o,h,u]=this.children,c=t.getRenderTarget(),l=t.toneMapping,d=t.xr.enabled;t.toneMapping=yn,t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,a),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,s),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,h),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,u),t.setRenderTarget(c),t.toneMapping=l,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class cs extends ze{constructor(t,e,n,a,r,s,o,h,u,c){t=t!==void 0?t:[],e=e!==void 0?e:gi,super(t,e,n,a,r,s,o,h,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ic extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},a=[n,n,n,n,n,n];e.encoding!==void 0&&(Pi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Wn?ne:kn),this.texture=new cs(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ei(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Rn});r.uniforms.tEquirect.value=e;const s=new tn(a,r),o=e.minFilter;return e.minFilter===Li&&(e.minFilter=qe),new nc(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,a){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,a);t.setRenderTarget(r)}}const Hr=new at,rc=new at,sc=new oe;class On{constructor(t=new at(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,a){return this.normal.set(t,e,n),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const a=Hr.subVectors(n,e).cross(rc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Hr),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sc.getNormalMatrix(t),a=this.coplanarPoint(Hr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new ls,nr=new at;class hs{constructor(t=new On,e=new On,n=new On,a=new On,r=new On,s=new On){this.planes=[t,e,n,a,r,s]}set(t,e,n,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){const n=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],h=a[3],u=a[4],c=a[5],l=a[6],d=a[7],p=a[8],v=a[9],g=a[10],m=a[11],f=a[12],_=a[13],x=a[14],y=a[15];if(n[0].setComponents(h-r,d-u,m-p,y-f).normalize(),n[1].setComponents(h+r,d+u,m+p,y+f).normalize(),n[2].setComponents(h+s,d+c,m+v,y+_).normalize(),n[3].setComponents(h-s,d-c,m-v,y-_).normalize(),n[4].setComponents(h-o,d-l,m-g,y-x).normalize(),e===xn)n[5].setComponents(h+o,d+l,m+g,y+x).normalize();else if(e===lr)n[5].setComponents(o,l,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(t){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(t){const e=this.planes,n=t.center,a=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const a=e[n];if(nr.x=a.normal.x>0?t.max.x:t.min.x,nr.y=a.normal.y>0?t.max.y:t.min.y,nr.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _o(){let i=null,t=!1,e=null,n=null;function a(r,s){e(r,s),n=i.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(a),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ac(i,t){const e=t.isWebGL2,n=new WeakMap;function a(u,c){const l=u.array,d=u.usage,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,d),u.onUploadCallback();let v;if(l instanceof Float32Array)v=i.FLOAT;else if(l instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)v=i.SHORT;else if(l instanceof Uint32Array)v=i.UNSIGNED_INT;else if(l instanceof Int32Array)v=i.INT;else if(l instanceof Int8Array)v=i.BYTE;else if(l instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:v,bytesPerElement:l.BYTES_PER_ELEMENT,version:u.version}}function r(u,c,l){const d=c.array,p=c.updateRange;i.bindBuffer(l,u),p.count===-1?i.bufferSubData(l,0,d):(e?i.bufferSubData(l,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(l,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c&&(i.deleteBuffer(c.buffer),n.delete(u))}function h(u,c){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const l=n.get(u);l===void 0?n.set(u,a(u,c)):l.version<u.version&&(r(l.buffer,u,c),l.version=u.version)}return{get:s,remove:o,update:h}}class dr extends In{constructor(t=1,e=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:a};const r=t/2,s=e/2,o=Math.floor(n),h=Math.floor(a),u=o+1,c=h+1,l=t/o,d=e/h,p=[],v=[],g=[],m=[];for(let f=0;f<c;f++){const _=f*d-s;for(let x=0;x<u;x++){const y=x*l-r;v.push(y,-_,0),g.push(0,0,1),m.push(x/o),m.push(1-f/h)}}for(let f=0;f<h;f++)for(let _=0;_<o;_++){const x=_+u*f,y=_+u*(f+1),M=_+1+u*(f+1),C=_+1+u*f;p.push(x,y,C),p.push(y,M,C)}this.setIndex(p),this.setAttribute("position",new ln(v,3)),this.setAttribute("normal",new ln(g,3)),this.setAttribute("uv",new ln(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dr(t.width,t.height,t.widthSegments,t.heightSegments)}}var oc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fc="vec3 transformed = vec3( position );",pc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_c=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,xc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ec=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ac=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ic=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Oc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$c=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,th=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,nh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ih=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ah=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ch=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hh=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,uh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ph=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_h=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,xh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Mh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ah=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Th=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ch=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ph=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ih=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,kh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$h=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jh=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qh=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tu=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ru=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,su=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ou=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vu=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_u=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Su=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Au=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ru=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Du=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Uu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,se={alphamap_fragment:oc,alphamap_pars_fragment:lc,alphatest_fragment:cc,alphatest_pars_fragment:hc,aomap_fragment:uc,aomap_pars_fragment:dc,begin_vertex:fc,beginnormal_vertex:pc,bsdfs:mc,iridescence_fragment:vc,bumpmap_pars_fragment:gc,clipping_planes_fragment:_c,clipping_planes_pars_fragment:xc,clipping_planes_pars_vertex:yc,clipping_planes_vertex:Mc,color_fragment:Ec,color_pars_fragment:Sc,color_pars_vertex:wc,color_vertex:bc,common:Ac,cube_uv_reflection_fragment:Tc,defaultnormal_vertex:Rc,displacementmap_pars_vertex:Cc,displacementmap_vertex:Pc,emissivemap_fragment:Lc,emissivemap_pars_fragment:Ic,encodings_fragment:Dc,encodings_pars_fragment:Uc,envmap_fragment:Nc,envmap_common_pars_fragment:Fc,envmap_pars_fragment:Bc,envmap_pars_vertex:Oc,envmap_physical_pars_fragment:Kc,envmap_vertex:zc,fog_vertex:Vc,fog_pars_vertex:Hc,fog_fragment:Gc,fog_pars_fragment:Wc,gradientmap_pars_fragment:kc,lightmap_fragment:Xc,lightmap_pars_fragment:qc,lights_lambert_fragment:Yc,lights_lambert_pars_fragment:$c,lights_pars_begin:jc,lights_toon_fragment:Zc,lights_toon_pars_fragment:Jc,lights_phong_fragment:Qc,lights_phong_pars_fragment:th,lights_physical_fragment:eh,lights_physical_pars_fragment:nh,lights_fragment_begin:ih,lights_fragment_maps:rh,lights_fragment_end:sh,logdepthbuf_fragment:ah,logdepthbuf_pars_fragment:oh,logdepthbuf_pars_vertex:lh,logdepthbuf_vertex:ch,map_fragment:hh,map_pars_fragment:uh,map_particle_fragment:dh,map_particle_pars_fragment:fh,metalnessmap_fragment:ph,metalnessmap_pars_fragment:mh,morphcolor_vertex:vh,morphnormal_vertex:gh,morphtarget_pars_vertex:_h,morphtarget_vertex:xh,normal_fragment_begin:yh,normal_fragment_maps:Mh,normal_pars_fragment:Eh,normal_pars_vertex:Sh,normal_vertex:wh,normalmap_pars_fragment:bh,clearcoat_normal_fragment_begin:Ah,clearcoat_normal_fragment_maps:Th,clearcoat_pars_fragment:Rh,iridescence_pars_fragment:Ch,output_fragment:Ph,packing:Lh,premultiplied_alpha_fragment:Ih,project_vertex:Dh,dithering_fragment:Uh,dithering_pars_fragment:Nh,roughnessmap_fragment:Fh,roughnessmap_pars_fragment:Bh,shadowmap_pars_fragment:Oh,shadowmap_pars_vertex:zh,shadowmap_vertex:Vh,shadowmask_pars_fragment:Hh,skinbase_vertex:Gh,skinning_pars_vertex:Wh,skinning_vertex:kh,skinnormal_vertex:Xh,specularmap_fragment:qh,specularmap_pars_fragment:Yh,tonemapping_fragment:$h,tonemapping_pars_fragment:jh,transmission_fragment:Kh,transmission_pars_fragment:Zh,uv_pars_fragment:Jh,uv_pars_vertex:Qh,uv_vertex:tu,worldpos_vertex:eu,background_vert:nu,background_frag:iu,backgroundCube_vert:ru,backgroundCube_frag:su,cube_vert:au,cube_frag:ou,depth_vert:lu,depth_frag:cu,distanceRGBA_vert:hu,distanceRGBA_frag:uu,equirect_vert:du,equirect_frag:fu,linedashed_vert:pu,linedashed_frag:mu,meshbasic_vert:vu,meshbasic_frag:gu,meshlambert_vert:_u,meshlambert_frag:xu,meshmatcap_vert:yu,meshmatcap_frag:Mu,meshnormal_vert:Eu,meshnormal_frag:Su,meshphong_vert:wu,meshphong_frag:bu,meshphysical_vert:Au,meshphysical_frag:Tu,meshtoon_vert:Ru,meshtoon_frag:Cu,points_vert:Pu,points_frag:Lu,shadow_vert:Iu,shadow_frag:Du,sprite_vert:Uu,sprite_frag:Nu},Ft={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},sn={basic:{uniforms:De([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:De([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new de(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:De([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:De([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:De([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new de(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:De([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:De([Ft.points,Ft.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:De([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:De([Ft.common,Ft.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:De([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:De([Ft.sprite,Ft.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:De([Ft.common,Ft.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:De([Ft.lights,Ft.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};sn.physical={uniforms:De([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const ir={r:0,b:0,g:0};function Fu(i,t,e,n,a,r,s){const o=new de(0);let h=r===!0?0:1,u,c,l=null,d=0,p=null;function v(m,f){let _=!1,x=f.isScene===!0?f.background:null;switch(x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?g(o,h):x&&x.isColor&&(g(x,1),_=!0),i.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,s),_=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,s),_=!0;break}(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===hr)?(c===void 0&&(c=new tn(new Ei(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:yi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,V,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=x.colorSpace!==ne,(l!==x||d!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,l=x,d=x.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new tn(new dr(2,2),new Yn({name:"BackgroundMaterial",uniforms:yi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=x.colorSpace!==ne,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(l!==x||d!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,l=x,d=x.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,f){m.getRGB(ir,vo(i)),n.buffers.color.setClear(ir.r,ir.g,ir.b,f,s)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),h=f,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,g(o,h)},render:v}}function Bu(i,t,e,n){const a=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,o={},h=m(null);let u=h,c=!1;function l(k,X,st,F,U){let Z=!1;if(s){const Y=g(F,st,X);u!==Y&&(u=Y,p(u.object)),Z=f(k,F,st,U),Z&&_(k,F,st,U)}else{const Y=X.wireframe===!0;(u.geometry!==F.id||u.program!==st.id||u.wireframe!==Y)&&(u.geometry=F.id,u.program=st.id,u.wireframe=Y,Z=!0)}U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,N(k,X,st,F),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(k){return n.isWebGL2?i.bindVertexArray(k):r.bindVertexArrayOES(k)}function v(k){return n.isWebGL2?i.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function g(k,X,st){const F=st.wireframe===!0;let U=o[k.id];U===void 0&&(U={},o[k.id]=U);let Z=U[X.id];Z===void 0&&(Z={},U[X.id]=Z);let Y=Z[F];return Y===void 0&&(Y=m(d()),Z[F]=Y),Y}function m(k){const X=[],st=[],F=[];for(let U=0;U<a;U++)X[U]=0,st[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:st,attributeDivisors:F,object:k,attributes:{},index:null}}function f(k,X,st,F){const U=u.attributes,Z=X.attributes;let Y=0;const O=st.getAttributes();for(const L in O)if(O[L].location>=0){const A=U[L];let T=Z[L];if(T===void 0&&(L==="instanceMatrix"&&k.instanceMatrix&&(T=k.instanceMatrix),L==="instanceColor"&&k.instanceColor&&(T=k.instanceColor)),A===void 0||A.attribute!==T||T&&A.data!==T.data)return!0;Y++}return u.attributesNum!==Y||u.index!==F}function _(k,X,st,F){const U={},Z=X.attributes;let Y=0;const O=st.getAttributes();for(const L in O)if(O[L].location>=0){let A=Z[L];A===void 0&&(L==="instanceMatrix"&&k.instanceMatrix&&(A=k.instanceMatrix),L==="instanceColor"&&k.instanceColor&&(A=k.instanceColor));const T={};T.attribute=A,A&&A.data&&(T.data=A.data),U[L]=T,Y++}u.attributes=U,u.attributesNum=Y,u.index=F}function x(){const k=u.newAttributes;for(let X=0,st=k.length;X<st;X++)k[X]=0}function y(k){M(k,0)}function M(k,X){const st=u.newAttributes,F=u.enabledAttributes,U=u.attributeDivisors;st[k]=1,F[k]===0&&(i.enableVertexAttribArray(k),F[k]=1),U[k]!==X&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,X),U[k]=X)}function C(){const k=u.newAttributes,X=u.enabledAttributes;for(let st=0,F=X.length;st<F;st++)X[st]!==k[st]&&(i.disableVertexAttribArray(st),X[st]=0)}function V(k,X,st,F,U,Z,Y){Y===!0?i.vertexAttribIPointer(k,X,st,U,Z):i.vertexAttribPointer(k,X,st,F,U,Z)}function N(k,X,st,F){if(n.isWebGL2===!1&&(k.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const U=F.attributes,Z=st.getAttributes(),Y=X.defaultAttributeValues;for(const O in Z){const L=Z[O];if(L.location>=0){let R=U[O];if(R===void 0&&(O==="instanceMatrix"&&k.instanceMatrix&&(R=k.instanceMatrix),O==="instanceColor"&&k.instanceColor&&(R=k.instanceColor)),R!==void 0){const A=R.normalized,T=R.itemSize,H=e.get(R);if(H===void 0)continue;const tt=H.buffer,nt=H.type,K=H.bytesPerElement,ut=n.isWebGL2===!0&&(nt===i.INT||nt===i.UNSIGNED_INT||R.gpuType===Za);if(R.isInterleavedBufferAttribute){const dt=R.data,q=dt.stride,bt=R.offset;if(dt.isInstancedInterleavedBuffer){for(let pt=0;pt<L.locationSize;pt++)M(L.location+pt,dt.meshPerAttribute);k.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let pt=0;pt<L.locationSize;pt++)y(L.location+pt);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let pt=0;pt<L.locationSize;pt++)V(L.location+pt,T/L.locationSize,nt,A,q*K,(bt+T/L.locationSize*pt)*K,ut)}else{if(R.isInstancedBufferAttribute){for(let dt=0;dt<L.locationSize;dt++)M(L.location+dt,R.meshPerAttribute);k.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let dt=0;dt<L.locationSize;dt++)y(L.location+dt);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let dt=0;dt<L.locationSize;dt++)V(L.location+dt,T/L.locationSize,nt,A,T*K,T/L.locationSize*dt*K,ut)}}else if(Y!==void 0){const A=Y[O];if(A!==void 0)switch(A.length){case 2:i.vertexAttrib2fv(L.location,A);break;case 3:i.vertexAttrib3fv(L.location,A);break;case 4:i.vertexAttrib4fv(L.location,A);break;default:i.vertexAttrib1fv(L.location,A)}}}}C()}function E(){W();for(const k in o){const X=o[k];for(const st in X){const F=X[st];for(const U in F)v(F[U].object),delete F[U];delete X[st]}delete o[k]}}function S(k){if(o[k.id]===void 0)return;const X=o[k.id];for(const st in X){const F=X[st];for(const U in F)v(F[U].object),delete F[U];delete X[st]}delete o[k.id]}function I(k){for(const X in o){const st=o[X];if(st[k.id]===void 0)continue;const F=st[k.id];for(const U in F)v(F[U].object),delete F[U];delete st[k.id]}}function W(){D(),c=!0,u!==h&&(u=h,p(u.object))}function D(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:l,reset:W,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:y,disableUnusedAttributes:C}}function Ou(i,t,e,n){const a=n.isWebGL2;let r;function s(u){r=u}function o(u,c){i.drawArrays(r,u,c),e.update(c,r,1)}function h(u,c,l){if(l===0)return;let d,p;if(a)d=i,p="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,u,c,l),e.update(c,r,l)}this.setMode=s,this.render=o,this.renderInstances=h}function zu(i,t,e){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const V=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(V){if(V==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const h=r(o);h!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);const u=s||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,l=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=s||t.has("OES_texture_float"),M=x&&y,C=s?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:a,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:C}}function Vu(i){const t=this;let e=null,n=0,a=!1,r=!1;const s=new On,o=new oe,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const p=l.length!==0||d||n!==0||a;return a=d,n=l.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,d){e=c(l,d,0)},this.setState=function(l,d,p){const v=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,f=i.get(l);if(!a||v===null||v.length===0||r&&!m)r?c(null):u();else{const _=r?0:n,x=_*4;let y=f.clippingState||null;h.value=y,y=c(v,d,x,p);for(let M=0;M!==x;++M)y[M]=e[M];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(l,d,p,v){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=h.value,v!==!0||m===null){const f=p+g*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==g;++x,y+=4)s.copy(l[x]).applyMatrix4(_,o),s.normal.toArray(m,y),m[y+3]=s.constant}h.value=m,h.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Hu(i){let t=new WeakMap;function e(s,o){return o===Zr?s.mapping=gi:o===Jr&&(s.mapping=_i),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===Zr||o===Jr)if(t.has(s)){const h=t.get(s).texture;return e(h,s.mapping)}else{const h=s.image;if(h&&h.height>0){const u=new ic(h.height/2);return u.fromEquirectangularTexture(i,s),t.set(s,u),s.addEventListener("dispose",a),e(u.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class xo extends go{constructor(t=-1,e=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-t,s=n+t,o=a+e,h=a-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,s=r+u*this.view.width,o-=c*this.view.offsetY,h=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const pi=4,pa=[.125,.215,.35,.446,.526,.582],Vn=20,Gr=new xo,ma=new de;let Wr=null;const zn=(1+Math.sqrt(5))/2,di=1/zn,va=[new at(1,1,1),new at(-1,1,1),new at(1,1,-1),new at(-1,1,-1),new at(0,zn,di),new at(0,zn,-di),new at(di,0,zn),new at(-di,0,zn),new at(zn,di,0),new at(-zn,di,0)];class ga{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,a=100){Wr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,a,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ya(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wr),t.scissorTest=!1,rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:Ii,format:Qe,colorSpace:en,depthBuffer:!1},a=_a(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_a(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gu(r)),this._blurMaterial=Wu(r,t,e)}return a}_compileMaterial(t){const e=new tn(this._lodPlanes[0],t);this._renderer.compile(e,Gr)}_sceneToCubeUV(t,e,n,a){const o=new Ye(90,1,e,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,d=c.toneMapping;c.getClearColor(ma),c.toneMapping=yn,c.autoClear=!1;const p=new fo({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),v=new tn(new Ei,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(ma),g=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(o.up.set(0,h[f],0),o.lookAt(u[f],0,0)):_===1?(o.up.set(0,0,h[f]),o.lookAt(0,u[f],0)):(o.up.set(0,h[f],0),o.lookAt(0,0,u[f]));const x=this._cubeSize;rr(a,_*x,f>2?x:0,x,x),c.setRenderTarget(a),g&&c.render(v,o),c.render(t,o)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=d,c.autoClear=l,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,a=t.mapping===gi||t.mapping===_i;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ya()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xa());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new tn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const h=this._cubeSize;rr(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(s,Gr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=va[(a-1)%va.length];this._blur(t,a-1,a,r,s)}e.autoClear=n}_blur(t,e,n,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,a,"latitudinal",r),this._halfBlur(s,t,n,n,a,"longitudinal",r)}_halfBlur(t,e,n,a,r,s,o){const h=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,l=new tn(this._lodPlanes[a],u),d=u.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vn-1),g=r/v,m=isFinite(r)?1+Math.floor(c*g):Vn;m>Vn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vn}`);const f=[];let _=0;for(let V=0;V<Vn;++V){const N=V/g,E=Math.exp(-N*N/2);f.push(E),V===0?_+=E:V<m&&(_+=2*E)}for(let V=0;V<f.length;V++)f[V]=f[V]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-n;const y=this._sizeLods[a],M=3*y*(a>x-pi?a-x+pi:0),C=4*(this._cubeSize-y);rr(e,M,C,3*y,2*y),h.setRenderTarget(e),h.render(l,Gr)}}function Gu(i){const t=[],e=[],n=[];let a=i;const r=i-pi+1+pa.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let h=1/o;s>i-pi?h=pa[s-i+pi-1]:s===0&&(h=0),n.push(h);const u=1/(o-2),c=-u,l=1+u,d=[c,c,l,c,l,l,c,c,l,l,c,l],p=6,v=6,g=3,m=2,f=1,_=new Float32Array(g*v*p),x=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let C=0;C<p;C++){const V=C%3*2/3-1,N=C>2?0:-1,E=[V,N,0,V+2/3,N,0,V+2/3,N+1,0,V,N,0,V+2/3,N+1,0,V,N+1,0];_.set(E,g*v*C),x.set(d,m*v*C);const S=[C,C,C,C,C,C];y.set(S,f*v*C)}const M=new In;M.setAttribute("position",new on(_,g)),M.setAttribute("uv",new on(x,m)),M.setAttribute("faceIndex",new on(y,f)),t.push(M),a>pi&&a--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _a(i,t,e){const n=new Xn(i,t,e);return n.texture.mapping=hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,t,e,n,a){i.viewport.set(t,e,n,a),i.scissor.set(t,e,n,a)}function Wu(i,t,e){const n=new Float32Array(Vn),a=new at(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function xa(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ya(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function us(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ku(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const h=o.mapping,u=h===Zr||h===Jr,c=h===gi||h===_i;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let l=t.get(o);return e===null&&(e=new ga(i)),l=u?e.fromEquirectangular(o,l):e.fromCubemap(o,l),t.set(o,l),l.texture}else{if(t.has(o))return t.get(o).texture;{const l=o.image;if(u&&l&&l.height>0||c&&l&&a(l)){e===null&&(e=new ga(i));const d=u?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function a(o){let h=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&h++;return h===u}function r(o){const h=o.target;h.removeEventListener("dispose",r);const u=t.get(h);u!==void 0&&(t.delete(h),u.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function Xu(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return t[n]=a,a}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const a=e(n);return a===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function qu(i,t,e,n){const a={},r=new WeakMap;function s(l){const d=l.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}d.removeEventListener("dispose",s),delete a[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(l,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,e.memory.geometries++),d}function h(l){const d=l.attributes;for(const v in d)t.update(d[v],i.ARRAY_BUFFER);const p=l.morphAttributes;for(const v in p){const g=p[v];for(let m=0,f=g.length;m<f;m++)t.update(g[m],i.ARRAY_BUFFER)}}function u(l){const d=[],p=l.index,v=l.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let x=0,y=_.length;x<y;x+=3){const M=_[x+0],C=_[x+1],V=_[x+2];d.push(M,C,C,V,V,M)}}else{const _=v.array;g=v.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const M=x+0,C=x+1,V=x+2;d.push(M,C,C,V,V,M)}}const m=new(ao(d)?mo:po)(d,1);m.version=g;const f=r.get(l);f&&t.remove(f),r.set(l,m)}function c(l){const d=r.get(l);if(d){const p=l.index;p!==null&&d.version<p.version&&u(l)}else u(l);return r.get(l)}return{get:o,update:h,getWireframeAttribute:c}}function Yu(i,t,e,n){const a=n.isWebGL2;let r;function s(d){r=d}let o,h;function u(d){o=d.type,h=d.bytesPerElement}function c(d,p){i.drawElements(r,p,o,d*h),e.update(p,r,1)}function l(d,p,v){if(v===0)return;let g,m;if(a)g=i,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,o,d*h,v),e.update(p,r,v)}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=l}function $u(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:n}}function ju(i,t){return i[0]-t[0]}function Ku(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Zu(i,t,e){const n={},a=new Float32Array(8),r=new WeakMap,s=new Ae,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function h(u,c,l){const d=u.morphTargetInfluences;if(t.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=v!==void 0?v.length:0;let m=r.get(c);if(m===void 0||m.count!==g){let X=function(){D.dispose(),r.delete(c),c.removeEventListener("dispose",X)};var p=X;m!==void 0&&m.texture.dispose();const x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,C=c.morphAttributes.position||[],V=c.morphAttributes.normal||[],N=c.morphAttributes.color||[];let E=0;x===!0&&(E=1),y===!0&&(E=2),M===!0&&(E=3);let S=c.attributes.position.count*E,I=1;S>t.maxTextureSize&&(I=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const W=new Float32Array(S*I*4*g),D=new co(W,S,I,g);D.type=Tn,D.needsUpdate=!0;const k=E*4;for(let st=0;st<g;st++){const F=C[st],U=V[st],Z=N[st],Y=S*I*4*st;for(let O=0;O<F.count;O++){const L=O*k;x===!0&&(s.fromBufferAttribute(F,O),W[Y+L+0]=s.x,W[Y+L+1]=s.y,W[Y+L+2]=s.z,W[Y+L+3]=0),y===!0&&(s.fromBufferAttribute(U,O),W[Y+L+4]=s.x,W[Y+L+5]=s.y,W[Y+L+6]=s.z,W[Y+L+7]=0),M===!0&&(s.fromBufferAttribute(Z,O),W[Y+L+8]=s.x,W[Y+L+9]=s.y,W[Y+L+10]=s.z,W[Y+L+11]=Z.itemSize===4?s.w:1)}}m={count:g,texture:D,size:new re(S,I)},r.set(c,m),c.addEventListener("dispose",X)}let f=0;for(let x=0;x<d.length;x++)f+=d[x];const _=c.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",d),l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const v=d===void 0?0:d.length;let g=n[c.id];if(g===void 0||g.length!==v){g=[];for(let y=0;y<v;y++)g[y]=[y,0];n[c.id]=g}for(let y=0;y<v;y++){const M=g[y];M[0]=y,M[1]=d[y]}g.sort(Ku);for(let y=0;y<8;y++)y<v&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(ju);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const M=o[y],C=M[0],V=M[1];C!==Number.MAX_SAFE_INTEGER&&V?(m&&c.getAttribute("morphTarget"+y)!==m[C]&&c.setAttribute("morphTarget"+y,m[C]),f&&c.getAttribute("morphNormal"+y)!==f[C]&&c.setAttribute("morphNormal"+y,f[C]),a[y]=V,_+=V):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),a[y]=0)}const x=c.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",a)}}return{update:h}}function Ju(i,t,e,n){let a=new WeakMap;function r(h){const u=n.render.frame,c=h.geometry,l=t.get(h,c);return a.get(l)!==u&&(t.update(l),a.set(l,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER)),l}function s(){a=new WeakMap}function o(h){const u=h.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:s}}const yo=new ze,Mo=new co,Eo=new Vl,So=new cs,Ma=[],Ea=[],Sa=new Float32Array(16),wa=new Float32Array(9),ba=new Float32Array(4);function Si(i,t,e){const n=i[0];if(n<=0||n>0)return i;const a=t*e;let r=Ma[a];if(r===void 0&&(r=new Float32Array(a),Ma[a]=r),t!==0){n.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=e,i[s].toArray(r,o)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fr(i,t){let e=Ea[t];e===void 0&&(e=new Int32Array(t),Ea[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function td(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function ed(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function nd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function id(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;ba.set(n),i.uniformMatrix2fv(this.addr,!1,ba),we(e,n)}}function rd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;wa.set(n),i.uniformMatrix3fv(this.addr,!1,wa),we(e,n)}}function sd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;Sa.set(n),i.uniformMatrix4fv(this.addr,!1,Sa),we(e,n)}}function ad(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function od(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function ld(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function cd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function hd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ud(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function dd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function fd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function pd(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture2D(t||yo,a)}function md(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture3D(t||Eo,a)}function vd(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTextureCube(t||So,a)}function gd(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture2DArray(t||Mo,a)}function _d(i){switch(i){case 5126:return Qu;case 35664:return td;case 35665:return ed;case 35666:return nd;case 35674:return id;case 35675:return rd;case 35676:return sd;case 5124:case 35670:return ad;case 35667:case 35671:return od;case 35668:case 35672:return ld;case 35669:case 35673:return cd;case 5125:return hd;case 36294:return ud;case 36295:return dd;case 36296:return fd;case 35678:case 36198:case 36298:case 36306:case 35682:return pd;case 35679:case 36299:case 36307:return md;case 35680:case 36300:case 36308:case 36293:return vd;case 36289:case 36303:case 36311:case 36292:return gd}}function xd(i,t){i.uniform1fv(this.addr,t)}function yd(i,t){const e=Si(t,this.size,2);i.uniform2fv(this.addr,e)}function Md(i,t){const e=Si(t,this.size,3);i.uniform3fv(this.addr,e)}function Ed(i,t){const e=Si(t,this.size,4);i.uniform4fv(this.addr,e)}function Sd(i,t){const e=Si(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wd(i,t){const e=Si(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function bd(i,t){const e=Si(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ad(i,t){i.uniform1iv(this.addr,t)}function Td(i,t){i.uniform2iv(this.addr,t)}function Rd(i,t){i.uniform3iv(this.addr,t)}function Cd(i,t){i.uniform4iv(this.addr,t)}function Pd(i,t){i.uniform1uiv(this.addr,t)}function Ld(i,t){i.uniform2uiv(this.addr,t)}function Id(i,t){i.uniform3uiv(this.addr,t)}function Dd(i,t){i.uniform4uiv(this.addr,t)}function Ud(i,t,e){const n=this.cache,a=t.length,r=fr(e,a);Se(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let s=0;s!==a;++s)e.setTexture2D(t[s]||yo,r[s])}function Nd(i,t,e){const n=this.cache,a=t.length,r=fr(e,a);Se(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let s=0;s!==a;++s)e.setTexture3D(t[s]||Eo,r[s])}function Fd(i,t,e){const n=this.cache,a=t.length,r=fr(e,a);Se(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let s=0;s!==a;++s)e.setTextureCube(t[s]||So,r[s])}function Bd(i,t,e){const n=this.cache,a=t.length,r=fr(e,a);Se(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let s=0;s!==a;++s)e.setTexture2DArray(t[s]||Mo,r[s])}function Od(i){switch(i){case 5126:return xd;case 35664:return yd;case 35665:return Md;case 35666:return Ed;case 35674:return Sd;case 35675:return wd;case 35676:return bd;case 5124:case 35670:return Ad;case 35667:case 35671:return Td;case 35668:case 35672:return Rd;case 35669:case 35673:return Cd;case 5125:return Pd;case 36294:return Ld;case 36295:return Id;case 36296:return Dd;case 35678:case 36198:case 36298:case 36306:case 35682:return Ud;case 35679:case 36299:case 36307:return Nd;case 35680:case 36300:case 36308:case 36293:return Fd;case 36289:case 36303:case 36311:case 36292:return Bd}}class zd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=_d(e.type)}}class Vd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Od(e.type)}}class Hd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,e[o.id],n)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function Aa(i,t){i.seq.push(t),i.map[t.id]=t}function Gd(i,t,e){const n=i.name,a=n.length;for(kr.lastIndex=0;;){const r=kr.exec(n),s=kr.lastIndex;let o=r[1];const h=r[2]==="]",u=r[3];if(h&&(o=o|0),u===void 0||u==="["&&s+2===a){Aa(e,u===void 0?new zd(o,i,t):new Vd(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new Hd(o),Aa(e,l)),e=l}}}class or{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const r=t.getActiveUniform(e,a),s=t.getUniformLocation(e,r.name);Gd(r,s,this)}}setValue(t,e,n,a){const r=this.map[e];r!==void 0&&r.setValue(t,n,a)}setOptional(t,e,n){const a=e[n];a!==void 0&&this.setValue(t,n,a)}static upload(t,e,n,a){for(let r=0,s=e.length;r!==s;++r){const o=e[r],h=n[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,a)}}static seqWithValue(t,e){const n=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in e&&n.push(s)}return n}}function Ta(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let Wd=0;function kd(i,t){const e=i.split(`
`),n=[],a=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===t?">":" "} ${o}: ${e[s]}`)}return n.join(`
`)}function Xd(i){switch(i){case en:return["Linear","( value )"];case ne:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Ra(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=i.getShaderInfoLog(t).trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+kd(i.getShaderSource(t),s)}else return a}function qd(i,t){const e=Xd(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Yd(i,t){let e;switch(t){case rl:e="Linear";break;case sl:e="Reinhard";break;case al:e="OptimizedCineon";break;case ol:e="ACESFilmic";break;case ll:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $d(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ci).join(`
`)}function jd(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kd(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(t,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[s]={type:r.type,location:i.getAttribLocation(t,s),locationSize:o}}return e}function Ci(i){return i!==""}function Ca(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pa(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zd=/^[ \t]*#include +<([\w\d./]+)>/gm;function rs(i){return i.replace(Zd,Jd)}function Jd(i,t){const e=se[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return rs(e)}const Qd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function La(i){return i.replace(Qd,tf)}function tf(i,t,e,n){let a="";for(let r=parseInt(t);r<parseInt(e);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Ia(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ef(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qa?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function nf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gi:case _i:t="ENVMAP_TYPE_CUBE";break;case hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _i:t="ENVMAP_MODE_REFRACTION";break}return t}function sf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ja:t="ENVMAP_BLENDING_MULTIPLY";break;case nl:t="ENVMAP_BLENDING_MIX";break;case il:t="ENVMAP_BLENDING_ADD";break}return t}function af(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function of(i,t,e,n){const a=i.getContext(),r=e.defines;let s=e.vertexShader,o=e.fragmentShader;const h=ef(e),u=nf(e),c=rf(e),l=sf(e),d=af(e),p=e.isWebGL2?"":$d(e),v=jd(r),g=a.createProgram();let m,f,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ci).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ci).join(`
`),f.length>0&&(f+=`
`)):(m=[Ia(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ci).join(`
`),f=[p,Ia(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?se.tonemapping_pars_fragment:"",e.toneMapping!==yn?Yd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.encodings_pars_fragment,qd("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ci).join(`
`)),s=rs(s),s=Ca(s,e),s=Pa(s,e),o=rs(o),o=Ca(o,e),o=Pa(o,e),s=La(s),o=La(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Zs?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=_+m+s,y=_+f+o,M=Ta(a,a.VERTEX_SHADER,x),C=Ta(a,a.FRAGMENT_SHADER,y);if(a.attachShader(g,M),a.attachShader(g,C),e.index0AttributeName!==void 0?a.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g),i.debug.checkShaderErrors){const E=a.getProgramInfoLog(g).trim(),S=a.getShaderInfoLog(M).trim(),I=a.getShaderInfoLog(C).trim();let W=!0,D=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,g,M,C);else{const k=Ra(a,M,"vertex"),X=Ra(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+k+`
`+X)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(S===""||I==="")&&(D=!1);D&&(this.diagnostics={runnable:W,programLog:E,vertexShader:{log:S,prefix:m},fragmentShader:{log:I,prefix:f}})}a.deleteShader(M),a.deleteShader(C);let V;this.getUniforms=function(){return V===void 0&&(V=new or(a,g)),V};let N;return this.getAttributes=function(){return N===void 0&&(N=Kd(a,g)),N},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wd++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=C,this}let lf=0;class cf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,a=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new hf(t),e.set(t,n)),n}}class hf{constructor(t){this.id=lf++,this.code=t,this.usedTimes=0}}function uf(i,t,e,n,a,r,s){const o=new ho,h=new cf,u=[],c=a.isWebGL2,l=a.logarithmicDepthBuffer,d=a.vertexTextures;let p=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return E===0?"uv":`uv${E}`}function m(E,S,I,W,D){const k=W.fog,X=D.geometry,st=E.isMeshStandardMaterial?W.environment:null,F=(E.isMeshStandardMaterial?e:t).get(E.envMap||st),U=F&&F.mapping===hr?F.image.height:null,Z=v[E.type];E.precision!==null&&(p=a.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Y=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,O=Y!==void 0?Y.length:0;let L=0;X.morphAttributes.position!==void 0&&(L=1),X.morphAttributes.normal!==void 0&&(L=2),X.morphAttributes.color!==void 0&&(L=3);let R,A,T,H;if(Z){const fe=sn[Z];R=fe.vertexShader,A=fe.fragmentShader}else R=E.vertexShader,A=E.fragmentShader,h.update(E),T=h.getVertexShaderID(E),H=h.getFragmentShaderID(E);const tt=i.getRenderTarget(),nt=D.isInstancedMesh===!0,K=!!E.map,ut=!!E.matcap,dt=!!F,q=!!E.aoMap,bt=!!E.lightMap,pt=!!E.bumpMap,rt=!!E.normalMap,lt=!!E.displacementMap,qt=!!E.emissiveMap,Tt=!!E.metalnessMap,Vt=!!E.roughnessMap,Mt=E.anisotropy>0,jt=E.clearcoat>0,Jt=E.iridescence>0,P=E.sheen>0,b=E.transmission>0,et=Mt&&!!E.anisotropyMap,gt=jt&&!!E.clearcoatMap,mt=jt&&!!E.clearcoatNormalMap,B=jt&&!!E.clearcoatRoughnessMap,vt=Jt&&!!E.iridescenceMap,yt=Jt&&!!E.iridescenceThicknessMap,ct=P&&!!E.sheenColorMap,Ot=P&&!!E.sheenRoughnessMap,kt=!!E.specularMap,Ht=!!E.specularColorMap,Gt=!!E.specularIntensityMap,zt=b&&!!E.transmissionMap,$t=b&&!!E.thicknessMap,Qt=!!E.gradientMap,$=!!E.alphaMap,Pt=E.alphaTest>0,ot=!!E.extensions,Et=!!X.attributes.uv1,Dt=!!X.attributes.uv2,ie=!!X.attributes.uv3;return{isWebGL2:c,shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:R,fragmentShader:A,defines:E.defines,customVertexShaderID:T,customFragmentShaderID:H,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,instancing:nt,instancingColor:nt&&D.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:en,map:K,matcap:ut,envMap:dt,envMapMode:dt&&F.mapping,envMapCubeUVHeight:U,aoMap:q,lightMap:bt,bumpMap:pt,normalMap:rt,displacementMap:d&&lt,emissiveMap:qt,normalMapObjectSpace:rt&&E.normalMapType===Ml,normalMapTangentSpace:rt&&E.normalMapType===ro,metalnessMap:Tt,roughnessMap:Vt,anisotropy:Mt,anisotropyMap:et,clearcoat:jt,clearcoatMap:gt,clearcoatNormalMap:mt,clearcoatRoughnessMap:B,iridescence:Jt,iridescenceMap:vt,iridescenceThicknessMap:yt,sheen:P,sheenColorMap:ct,sheenRoughnessMap:Ot,specularMap:kt,specularColorMap:Ht,specularIntensityMap:Gt,transmission:b,transmissionMap:zt,thicknessMap:$t,gradientMap:Qt,opaque:E.transparent===!1&&E.blending===mi,alphaMap:$,alphaTest:Pt,combine:E.combine,mapUv:K&&g(E.map.channel),aoMapUv:q&&g(E.aoMap.channel),lightMapUv:bt&&g(E.lightMap.channel),bumpMapUv:pt&&g(E.bumpMap.channel),normalMapUv:rt&&g(E.normalMap.channel),displacementMapUv:lt&&g(E.displacementMap.channel),emissiveMapUv:qt&&g(E.emissiveMap.channel),metalnessMapUv:Tt&&g(E.metalnessMap.channel),roughnessMapUv:Vt&&g(E.roughnessMap.channel),anisotropyMapUv:et&&g(E.anisotropyMap.channel),clearcoatMapUv:gt&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:mt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&g(E.sheenRoughnessMap.channel),specularMapUv:kt&&g(E.specularMap.channel),specularColorMapUv:Ht&&g(E.specularColorMap.channel),specularIntensityMapUv:Gt&&g(E.specularIntensityMap.channel),transmissionMapUv:zt&&g(E.transmissionMap.channel),thicknessMapUv:$t&&g(E.thicknessMap.channel),alphaMapUv:$&&g(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(rt||Mt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:Et,vertexUv2s:Dt,vertexUv3s:ie,pointsUvs:D.isPoints===!0&&!!X.attributes.uv&&(K||$),fog:!!k,useFog:E.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:D.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:L,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:E.toneMapped?i.toneMapping:yn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_n,flipSided:E.side===Oe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ot&&E.extensions.derivatives===!0,extensionFragDepth:ot&&E.extensions.fragDepth===!0,extensionDrawBuffers:ot&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(_(S,E),x(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function _(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function x(E,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),E.push(o.mask)}function y(E){const S=v[E.type];let I;if(S){const W=sn[S];I=Ql.clone(W.uniforms)}else I=E.uniforms;return I}function M(E,S){let I;for(let W=0,D=u.length;W<D;W++){const k=u[W];if(k.cacheKey===S){I=k,++I.usedTimes;break}}return I===void 0&&(I=new of(i,S,E,r),u.push(I)),I}function C(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function V(E){h.remove(E)}function N(){h.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:M,releaseProgram:C,releaseShaderCache:V,programs:u,dispose:N}}function df(){let i=new WeakMap;function t(r){let s=i.get(r);return s===void 0&&(s={},i.set(r,s)),s}function e(r){i.delete(r)}function n(r,s,o){i.get(r)[s]=o}function a(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:a}}function ff(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Da(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ua(){const i=[];let t=0;const e=[],n=[],a=[];function r(){t=0,e.length=0,n.length=0,a.length=0}function s(l,d,p,v,g,m){let f=i[t];return f===void 0?(f={id:l.id,object:l,geometry:d,material:p,groupOrder:v,renderOrder:l.renderOrder,z:g,group:m},i[t]=f):(f.id=l.id,f.object=l,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=l.renderOrder,f.z=g,f.group=m),t++,f}function o(l,d,p,v,g,m){const f=s(l,d,p,v,g,m);p.transmission>0?n.push(f):p.transparent===!0?a.push(f):e.push(f)}function h(l,d,p,v,g,m){const f=s(l,d,p,v,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?a.unshift(f):e.unshift(f)}function u(l,d){e.length>1&&e.sort(l||ff),n.length>1&&n.sort(d||Da),a.length>1&&a.sort(d||Da)}function c(){for(let l=t,d=i.length;l<d;l++){const p=i[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:a,init:r,push:o,unshift:h,finish:c,sort:u}}function pf(){let i=new WeakMap;function t(n,a){const r=i.get(n);let s;return r===void 0?(s=new Ua,i.set(n,[s])):a>=r.length?(s=new Ua,r.push(s)):s=r[a],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function mf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new at,color:new de};break;case"SpotLight":e={position:new at,direction:new at,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new at,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new at,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new at,halfWidth:new at,halfHeight:new at};break}return i[t.id]=e,e}}}function vf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gf=0;function _f(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xf(i,t){const e=new mf,n=vf(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)a.probe.push(new at);const r=new at,s=new Ee,o=new Ee;function h(c,l){let d=0,p=0,v=0;for(let I=0;I<9;I++)a.probe[I].set(0,0,0);let g=0,m=0,f=0,_=0,x=0,y=0,M=0,C=0,V=0,N=0;c.sort(_f);const E=l===!0?Math.PI:1;for(let I=0,W=c.length;I<W;I++){const D=c[I],k=D.color,X=D.intensity,st=D.distance,F=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=k.r*X*E,p+=k.g*X*E,v+=k.b*X*E;else if(D.isLightProbe)for(let U=0;U<9;U++)a.probe[U].addScaledVector(D.sh.coefficients[U],X);else if(D.isDirectionalLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const Z=D.shadow,Y=n.get(D);Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,a.directionalShadow[g]=Y,a.directionalShadowMap[g]=F,a.directionalShadowMatrix[g]=D.shadow.matrix,y++}a.directional[g]=U,g++}else if(D.isSpotLight){const U=e.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(k).multiplyScalar(X*E),U.distance=st,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,a.spot[f]=U;const Z=D.shadow;if(D.map&&(a.spotLightMap[V]=D.map,V++,Z.updateMatrices(D),D.castShadow&&N++),a.spotLightMatrix[f]=Z.matrix,D.castShadow){const Y=n.get(D);Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,a.spotShadow[f]=Y,a.spotShadowMap[f]=F,C++}f++}else if(D.isRectAreaLight){const U=e.get(D);U.color.copy(k).multiplyScalar(X),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),a.rectArea[_]=U,_++}else if(D.isPointLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity*E),U.distance=D.distance,U.decay=D.decay,D.castShadow){const Z=D.shadow,Y=n.get(D);Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,a.pointShadow[m]=Y,a.pointShadowMap[m]=F,a.pointShadowMatrix[m]=D.shadow.matrix,M++}a.point[m]=U,m++}else if(D.isHemisphereLight){const U=e.get(D);U.skyColor.copy(D.color).multiplyScalar(X*E),U.groundColor.copy(D.groundColor).multiplyScalar(X*E),a.hemi[x]=U,x++}}_>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ft.LTC_FLOAT_1,a.rectAreaLTC2=Ft.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Ft.LTC_HALF_1,a.rectAreaLTC2=Ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=d,a.ambient[1]=p,a.ambient[2]=v;const S=a.hash;(S.directionalLength!==g||S.pointLength!==m||S.spotLength!==f||S.rectAreaLength!==_||S.hemiLength!==x||S.numDirectionalShadows!==y||S.numPointShadows!==M||S.numSpotShadows!==C||S.numSpotMaps!==V)&&(a.directional.length=g,a.spot.length=f,a.rectArea.length=_,a.point.length=m,a.hemi.length=x,a.directionalShadow.length=y,a.directionalShadowMap.length=y,a.pointShadow.length=M,a.pointShadowMap.length=M,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=y,a.pointShadowMatrix.length=M,a.spotLightMatrix.length=C+V-N,a.spotLightMap.length=V,a.numSpotLightShadowsWithMaps=N,S.directionalLength=g,S.pointLength=m,S.spotLength=f,S.rectAreaLength=_,S.hemiLength=x,S.numDirectionalShadows=y,S.numPointShadows=M,S.numSpotShadows=C,S.numSpotMaps=V,a.version=gf++)}function u(c,l){let d=0,p=0,v=0,g=0,m=0;const f=l.matrixWorldInverse;for(let _=0,x=c.length;_<x;_++){const y=c[_];if(y.isDirectionalLight){const M=a.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),d++}else if(y.isSpotLight){const M=a.spot[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),v++}else if(y.isRectAreaLight){const M=a.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),o.identity(),s.copy(y.matrixWorld),s.premultiply(f),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=a.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const M=a.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:h,setupView:u,state:a}}function Na(i,t){const e=new xf(i,t),n=[],a=[];function r(){n.length=0,a.length=0}function s(l){n.push(l)}function o(l){a.push(l)}function h(l){e.setup(n,l)}function u(l){e.setupView(n,l)}return{init:r,state:{lightsArray:n,shadowsArray:a,lights:e},setupLights:h,setupLightsView:u,pushLight:s,pushShadow:o}}function yf(i,t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let h;return o===void 0?(h=new Na(i,t),e.set(r,[h])):s>=o.length?(h=new Na(i,t),o.push(h)):h=o[s],h}function a(){e=new WeakMap}return{get:n,dispose:a}}class Mf extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ef extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bf(i,t,e){let n=new hs;const a=new re,r=new re,s=new Ae,o=new Mf({depthPacking:yl}),h=new Ef,u={},c=e.maxTextureSize,l={[Pn]:Oe,[Oe]:Pn,[_n]:_n},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Sf,fragmentShader:wf}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new In;v.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new tn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa;let f=this.type;this.render=function(M,C,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const N=i.getRenderTarget(),E=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Rn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const W=f!==gn&&this.type===gn,D=f===gn&&this.type!==gn;for(let k=0,X=M.length;k<X;k++){const st=M[k],F=st.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;a.copy(F.mapSize);const U=F.getFrameExtents();if(a.multiply(U),r.copy(F.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(r.x=Math.floor(c/U.x),a.x=r.x*U.x,F.mapSize.x=r.x),a.y>c&&(r.y=Math.floor(c/U.y),a.y=r.y*U.y,F.mapSize.y=r.y)),F.map===null||W===!0||D===!0){const Y=this.type!==gn?{minFilter:Ue,magFilter:Ue}:{};F.map!==null&&F.map.dispose(),F.map=new Xn(a.x,a.y,Y),F.map.texture.name=st.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const Z=F.getViewportCount();for(let Y=0;Y<Z;Y++){const O=F.getViewport(Y);s.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),I.viewport(s),F.updateMatrices(st,Y),n=F.getFrustum(),y(C,V,F.camera,st,this.type)}F.isPointLightShadow!==!0&&this.type===gn&&_(F,V),F.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(N,E,S)};function _(M,C){const V=t.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Xn(a.x,a.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(C,null,V,d,g,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(C,null,V,p,g,null)}function x(M,C,V,N){let E=null;const S=V.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(S!==void 0)E=S;else if(E=V.isPointLight===!0?h:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const I=E.uuid,W=C.uuid;let D=u[I];D===void 0&&(D={},u[I]=D);let k=D[W];k===void 0&&(k=E.clone(),D[W]=k),E=k}if(E.visible=C.visible,E.wireframe=C.wireframe,N===gn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:l[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,V.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const I=i.properties.get(E);I.light=V}return E}function y(M,C,V,N,E){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===gn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld);const W=t.update(M),D=M.material;if(Array.isArray(D)){const k=W.groups;for(let X=0,st=k.length;X<st;X++){const F=k[X],U=D[F.materialIndex];if(U&&U.visible){const Z=x(M,U,N,E);i.renderBufferDirect(V,null,W,Z,M,F)}}}else if(D.visible){const k=x(M,D,N,E);i.renderBufferDirect(V,null,W,k,M,null)}}const I=M.children;for(let W=0,D=I.length;W<D;W++)y(I[W],C,V,N,E)}}function Af(i,t,e){const n=e.isWebGL2;function a(){let $=!1;const Pt=new Ae;let ot=null;const Et=new Ae(0,0,0,0);return{setMask:function(Dt){ot!==Dt&&!$&&(i.colorMask(Dt,Dt,Dt,Dt),ot=Dt)},setLocked:function(Dt){$=Dt},setClear:function(Dt,ie,he,fe,Fe){Fe===!0&&(Dt*=fe,ie*=fe,he*=fe),Pt.set(Dt,ie,he,fe),Et.equals(Pt)===!1&&(i.clearColor(Dt,ie,he,fe),Et.copy(Pt))},reset:function(){$=!1,ot=null,Et.set(-1,0,0,0)}}}function r(){let $=!1,Pt=null,ot=null,Et=null;return{setTest:function(Dt){Dt?tt(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(Dt){Pt!==Dt&&!$&&(i.depthMask(Dt),Pt=Dt)},setFunc:function(Dt){if(ot!==Dt){switch(Dt){case jo:i.depthFunc(i.NEVER);break;case Ko:i.depthFunc(i.ALWAYS);break;case Zo:i.depthFunc(i.LESS);break;case Kr:i.depthFunc(i.LEQUAL);break;case Jo:i.depthFunc(i.EQUAL);break;case Qo:i.depthFunc(i.GEQUAL);break;case tl:i.depthFunc(i.GREATER);break;case el:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=Dt}},setLocked:function(Dt){$=Dt},setClear:function(Dt){Et!==Dt&&(i.clearDepth(Dt),Et=Dt)},reset:function(){$=!1,Pt=null,ot=null,Et=null}}}function s(){let $=!1,Pt=null,ot=null,Et=null,Dt=null,ie=null,he=null,fe=null,Fe=null;return{setTest:function(ee){$||(ee?tt(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(ee){Pt!==ee&&!$&&(i.stencilMask(ee),Pt=ee)},setFunc:function(ee,ht,ft){(ot!==ee||Et!==ht||Dt!==ft)&&(i.stencilFunc(ee,ht,ft),ot=ee,Et=ht,Dt=ft)},setOp:function(ee,ht,ft){(ie!==ee||he!==ht||fe!==ft)&&(i.stencilOp(ee,ht,ft),ie=ee,he=ht,fe=ft)},setLocked:function(ee){$=ee},setClear:function(ee){Fe!==ee&&(i.clearStencil(ee),Fe=ee)},reset:function(){$=!1,Pt=null,ot=null,Et=null,Dt=null,ie=null,he=null,fe=null,Fe=null}}}const o=new a,h=new r,u=new s,c=new WeakMap,l=new WeakMap;let d={},p={},v=new WeakMap,g=[],m=null,f=!1,_=null,x=null,y=null,M=null,C=null,V=null,N=null,E=!1,S=null,I=null,W=null,D=null,k=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let st=!1,F=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(U)[1]),st=F>=1):U.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),st=F>=2);let Z=null,Y={};const O=i.getParameter(i.SCISSOR_BOX),L=i.getParameter(i.VIEWPORT),R=new Ae().fromArray(O),A=new Ae().fromArray(L);function T($,Pt,ot,Et){const Dt=new Uint8Array(4),ie=i.createTexture();i.bindTexture($,ie),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<ot;he++)n&&($===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY)?i.texImage3D(Pt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(Pt+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return ie}const H={};H[i.TEXTURE_2D]=T(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=T(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(H[i.TEXTURE_2D_ARRAY]=T(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=T(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),h.setClear(1),u.setClear(0),tt(i.DEPTH_TEST),h.setFunc(Kr),lt(!1),qt(ys),tt(i.CULL_FACE),pt(Rn);function tt($){d[$]!==!0&&(i.enable($),d[$]=!0)}function nt($){d[$]!==!1&&(i.disable($),d[$]=!1)}function K($,Pt){return p[$]!==Pt?(i.bindFramebuffer($,Pt),p[$]=Pt,n&&($===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Pt),$===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Pt)),!0):!1}function ut($,Pt){let ot=g,Et=!1;if($)if(ot=v.get(Pt),ot===void 0&&(ot=[],v.set(Pt,ot)),$.isWebGLMultipleRenderTargets){const Dt=$.texture;if(ot.length!==Dt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,he=Dt.length;ie<he;ie++)ot[ie]=i.COLOR_ATTACHMENT0+ie;ot.length=Dt.length,Et=!0}}else ot[0]!==i.COLOR_ATTACHMENT0&&(ot[0]=i.COLOR_ATTACHMENT0,Et=!0);else ot[0]!==i.BACK&&(ot[0]=i.BACK,Et=!0);Et&&(e.isWebGL2?i.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function dt($){return m!==$?(i.useProgram($),m=$,!0):!1}const q={[fi]:i.FUNC_ADD,[Oo]:i.FUNC_SUBTRACT,[zo]:i.FUNC_REVERSE_SUBTRACT};if(n)q[ws]=i.MIN,q[bs]=i.MAX;else{const $=t.get("EXT_blend_minmax");$!==null&&(q[ws]=$.MIN_EXT,q[bs]=$.MAX_EXT)}const bt={[Vo]:i.ZERO,[Ho]:i.ONE,[Go]:i.SRC_COLOR,[Ya]:i.SRC_ALPHA,[$o]:i.SRC_ALPHA_SATURATE,[qo]:i.DST_COLOR,[ko]:i.DST_ALPHA,[Wo]:i.ONE_MINUS_SRC_COLOR,[$a]:i.ONE_MINUS_SRC_ALPHA,[Yo]:i.ONE_MINUS_DST_COLOR,[Xo]:i.ONE_MINUS_DST_ALPHA};function pt($,Pt,ot,Et,Dt,ie,he,fe){if($===Rn){f===!0&&(nt(i.BLEND),f=!1);return}if(f===!1&&(tt(i.BLEND),f=!0),$!==Bo){if($!==_||fe!==E){if((x!==fi||C!==fi)&&(i.blendEquation(i.FUNC_ADD),x=fi,C=fi),fe)switch($){case mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFunc(i.ONE,i.ONE);break;case Es:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ss:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Es:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ss:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}y=null,M=null,V=null,N=null,_=$,E=fe}return}Dt=Dt||Pt,ie=ie||ot,he=he||Et,(Pt!==x||Dt!==C)&&(i.blendEquationSeparate(q[Pt],q[Dt]),x=Pt,C=Dt),(ot!==y||Et!==M||ie!==V||he!==N)&&(i.blendFuncSeparate(bt[ot],bt[Et],bt[ie],bt[he]),y=ot,M=Et,V=ie,N=he),_=$,E=!1}function rt($,Pt){$.side===_n?nt(i.CULL_FACE):tt(i.CULL_FACE);let ot=$.side===Oe;Pt&&(ot=!ot),lt(ot),$.blending===mi&&$.transparent===!1?pt(Rn):pt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.premultipliedAlpha),h.setFunc($.depthFunc),h.setTest($.depthTest),h.setMask($.depthWrite),o.setMask($.colorWrite);const Et=$.stencilWrite;u.setTest(Et),Et&&(u.setMask($.stencilWriteMask),u.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),u.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Vt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt($){S!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),S=$)}function qt($){$!==No?(tt(i.CULL_FACE),$!==I&&($===ys?i.cullFace(i.BACK):$===Fo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),I=$}function Tt($){$!==W&&(st&&i.lineWidth($),W=$)}function Vt($,Pt,ot){$?(tt(i.POLYGON_OFFSET_FILL),(D!==Pt||k!==ot)&&(i.polygonOffset(Pt,ot),D=Pt,k=ot)):nt(i.POLYGON_OFFSET_FILL)}function Mt($){$?tt(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function jt($){$===void 0&&($=i.TEXTURE0+X-1),Z!==$&&(i.activeTexture($),Z=$)}function Jt($,Pt,ot){ot===void 0&&(Z===null?ot=i.TEXTURE0+X-1:ot=Z);let Et=Y[ot];Et===void 0&&(Et={type:void 0,texture:void 0},Y[ot]=Et),(Et.type!==$||Et.texture!==Pt)&&(Z!==ot&&(i.activeTexture(ot),Z=ot),i.bindTexture($,Pt||H[$]),Et.type=$,Et.texture=Pt)}function P(){const $=Y[Z];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function b(){try{i.compressedTexImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function gt(){try{i.texSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function mt(){try{i.texSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function B(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function yt(){try{i.texStorage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ot(){try{i.texImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ht($){R.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),R.copy($))}function Gt($){A.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),A.copy($))}function zt($,Pt){let ot=l.get(Pt);ot===void 0&&(ot=new WeakMap,l.set(Pt,ot));let Et=ot.get($);Et===void 0&&(Et=i.getUniformBlockIndex(Pt,$.name),ot.set($,Et))}function $t($,Pt){const Et=l.get(Pt).get($);c.get(Pt)!==Et&&(i.uniformBlockBinding(Pt,Et,$.__bindingPointIndex),c.set(Pt,Et))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,Y={},p={},v=new WeakMap,g=[],m=null,f=!1,_=null,x=null,y=null,M=null,C=null,V=null,N=null,E=!1,S=null,I=null,W=null,D=null,k=null,R.set(0,0,i.canvas.width,i.canvas.height),A.set(0,0,i.canvas.width,i.canvas.height),o.reset(),h.reset(),u.reset()}return{buffers:{color:o,depth:h,stencil:u},enable:tt,disable:nt,bindFramebuffer:K,drawBuffers:ut,useProgram:dt,setBlending:pt,setMaterial:rt,setFlipSided:lt,setCullFace:qt,setLineWidth:Tt,setPolygonOffset:Vt,setScissorTest:Mt,activeTexture:jt,bindTexture:Jt,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:et,texImage2D:Ot,texImage3D:kt,updateUBOMapping:zt,uniformBlockBinding:$t,texStorage2D:yt,texStorage3D:ct,texSubImage2D:gt,texSubImage3D:mt,compressedTexSubImage2D:B,compressedTexSubImage3D:vt,scissor:Ht,viewport:Gt,reset:Qt}}function Tf(i,t,e,n,a,r,s){const o=a.isWebGL2,h=a.maxTextures,u=a.maxCubemapSize,c=a.maxTextureSize,l=a.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,b){return f?new OffscreenCanvas(P,b):Di("canvas")}function x(P,b,et,gt){let mt=1;if((P.width>gt||P.height>gt)&&(mt=gt/Math.max(P.width,P.height)),mt<1||b===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const B=b?is:Math.floor,vt=B(mt*P.width),yt=B(mt*P.height);g===void 0&&(g=_(vt,yt));const ct=et?_(vt,yt):g;return ct.width=vt,ct.height=yt,ct.getContext("2d").drawImage(P,0,0,vt,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+vt+"x"+yt+")."),ct}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function y(P){return Js(P.width)&&Js(P.height)}function M(P){return o?!1:P.wrapS!==Je||P.wrapT!==Je||P.minFilter!==Ue&&P.minFilter!==qe}function C(P,b){return P.generateMipmaps&&b&&P.minFilter!==Ue&&P.minFilter!==qe}function V(P){i.generateMipmap(P)}function N(P,b,et,gt,mt=!1){if(o===!1)return b;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let B=b;return b===i.RED&&(et===i.FLOAT&&(B=i.R32F),et===i.HALF_FLOAT&&(B=i.R16F),et===i.UNSIGNED_BYTE&&(B=i.R8)),b===i.RG&&(et===i.FLOAT&&(B=i.RG32F),et===i.HALF_FLOAT&&(B=i.RG16F),et===i.UNSIGNED_BYTE&&(B=i.RG8)),b===i.RGBA&&(et===i.FLOAT&&(B=i.RGBA32F),et===i.HALF_FLOAT&&(B=i.RGBA16F),et===i.UNSIGNED_BYTE&&(B=gt===ne&&mt===!1?i.SRGB8_ALPHA8:i.RGBA8),et===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),et===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)),(B===i.R16F||B===i.R32F||B===i.RG16F||B===i.RG32F||B===i.RGBA16F||B===i.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function E(P,b,et){return C(P,et)===!0||P.isFramebufferTexture&&P.minFilter!==Ue&&P.minFilter!==qe?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function S(P){return P===Ue||P===As||P===vr?i.NEAREST:i.LINEAR}function I(P){const b=P.target;b.removeEventListener("dispose",I),D(b),b.isVideoTexture&&v.delete(b)}function W(P){const b=P.target;b.removeEventListener("dispose",W),X(b)}function D(P){const b=n.get(P);if(b.__webglInit===void 0)return;const et=P.source,gt=m.get(et);if(gt){const mt=gt[b.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&k(P),Object.keys(gt).length===0&&m.delete(et)}n.remove(P)}function k(P){const b=n.get(P);i.deleteTexture(b.__webglTexture);const et=P.source,gt=m.get(et);delete gt[b.__cacheKey],s.memory.textures--}function X(P){const b=P.texture,et=n.get(P),gt=n.get(b);if(gt.__webglTexture!==void 0&&(i.deleteTexture(gt.__webglTexture),s.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++)i.deleteFramebuffer(et.__webglFramebuffer[mt]),et.__webglDepthbuffer&&i.deleteRenderbuffer(et.__webglDepthbuffer[mt]);else{if(i.deleteFramebuffer(et.__webglFramebuffer),et.__webglDepthbuffer&&i.deleteRenderbuffer(et.__webglDepthbuffer),et.__webglMultisampledFramebuffer&&i.deleteFramebuffer(et.__webglMultisampledFramebuffer),et.__webglColorRenderbuffer)for(let mt=0;mt<et.__webglColorRenderbuffer.length;mt++)et.__webglColorRenderbuffer[mt]&&i.deleteRenderbuffer(et.__webglColorRenderbuffer[mt]);et.__webglDepthRenderbuffer&&i.deleteRenderbuffer(et.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let mt=0,B=b.length;mt<B;mt++){const vt=n.get(b[mt]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),s.memory.textures--),n.remove(b[mt])}n.remove(b),n.remove(P)}let st=0;function F(){st=0}function U(){const P=st;return P>=h&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+h),st+=1,P}function Z(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function Y(P,b){const et=n.get(P);if(P.isVideoTexture&&jt(P),P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){const gt=P.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(et,P,b);return}}e.bindTexture(i.TEXTURE_2D,et.__webglTexture,i.TEXTURE0+b)}function O(P,b){const et=n.get(P);if(P.version>0&&et.__version!==P.version){K(et,P,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,et.__webglTexture,i.TEXTURE0+b)}function L(P,b){const et=n.get(P);if(P.version>0&&et.__version!==P.version){K(et,P,b);return}e.bindTexture(i.TEXTURE_3D,et.__webglTexture,i.TEXTURE0+b)}function R(P,b){const et=n.get(P);if(P.version>0&&et.__version!==P.version){ut(et,P,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture,i.TEXTURE0+b)}const A={[Qr]:i.REPEAT,[Je]:i.CLAMP_TO_EDGE,[ts]:i.MIRRORED_REPEAT},T={[Ue]:i.NEAREST,[As]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[cl]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},H={[Sl]:i.NEVER,[Pl]:i.ALWAYS,[wl]:i.LESS,[Al]:i.LEQUAL,[bl]:i.EQUAL,[Cl]:i.GEQUAL,[Tl]:i.GREATER,[Rl]:i.NOTEQUAL};function tt(P,b,et){if(et?(i.texParameteri(P,i.TEXTURE_WRAP_S,A[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,A[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,A[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,T[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,T[b.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==Je||b.wrapT!==Je)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,S(b.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,S(b.minFilter)),b.minFilter!==Ue&&b.minFilter!==qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,H[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const gt=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ue||b.minFilter!==vr&&b.minFilter!==Li||b.type===Tn&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===Ii&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(P,gt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function nt(P,b){let et=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",I));const gt=b.source;let mt=m.get(gt);mt===void 0&&(mt={},m.set(gt,mt));const B=Z(b);if(B!==P.__cacheKey){mt[B]===void 0&&(mt[B]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,et=!0),mt[B].usedTimes++;const vt=mt[P.__cacheKey];vt!==void 0&&(mt[P.__cacheKey].usedTimes--,vt.usedTimes===0&&k(b)),P.__cacheKey=B,P.__webglTexture=mt[B].texture}return et}function K(P,b,et){let gt=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(gt=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(gt=i.TEXTURE_3D);const mt=nt(P,b),B=b.source;e.bindTexture(gt,P.__webglTexture,i.TEXTURE0+et);const vt=n.get(B);if(B.version!==vt.__version||mt===!0){e.activeTexture(i.TEXTURE0+et),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const yt=M(b)&&y(b.image)===!1;let ct=x(b.image,yt,!1,c);ct=Jt(b,ct);const Ot=y(ct)||o,kt=r.convert(b.format,b.colorSpace);let Ht=r.convert(b.type),Gt=N(b.internalFormat,kt,Ht,b.colorSpace);tt(gt,b,Ot);let zt;const $t=b.mipmaps,Qt=o&&b.isVideoTexture!==!0,$=vt.__version===void 0||mt===!0,Pt=E(b,ct,Ot);if(b.isDepthTexture)Gt=i.DEPTH_COMPONENT,o?b.type===Tn?Gt=i.DEPTH_COMPONENT32F:b.type===An?Gt=i.DEPTH_COMPONENT24:b.type===Hn?Gt=i.DEPTH24_STENCIL8:Gt=i.DEPTH_COMPONENT16:b.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Gn&&Gt===i.DEPTH_COMPONENT&&b.type!==os&&b.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=An,Ht=r.convert(b.type)),b.format===xi&&Gt===i.DEPTH_COMPONENT&&(Gt=i.DEPTH_STENCIL,b.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Hn,Ht=r.convert(b.type))),$&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Gt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Gt,ct.width,ct.height,0,kt,Ht,null));else if(b.isDataTexture)if($t.length>0&&Ot){Qt&&$&&e.texStorage2D(i.TEXTURE_2D,Pt,Gt,$t[0].width,$t[0].height);for(let ot=0,Et=$t.length;ot<Et;ot++)zt=$t[ot],Qt?e.texSubImage2D(i.TEXTURE_2D,ot,0,0,zt.width,zt.height,kt,Ht,zt.data):e.texImage2D(i.TEXTURE_2D,ot,Gt,zt.width,zt.height,0,kt,Ht,zt.data);b.generateMipmaps=!1}else Qt?($&&e.texStorage2D(i.TEXTURE_2D,Pt,Gt,ct.width,ct.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,kt,Ht,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,ct.width,ct.height,0,kt,Ht,ct.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qt&&$&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Gt,$t[0].width,$t[0].height,ct.depth);for(let ot=0,Et=$t.length;ot<Et;ot++)zt=$t[ot],b.format!==Qe?kt!==null?Qt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,zt.width,zt.height,ct.depth,kt,zt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Gt,zt.width,zt.height,ct.depth,0,zt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,zt.width,zt.height,ct.depth,kt,Ht,zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Gt,zt.width,zt.height,ct.depth,0,kt,Ht,zt.data)}else{Qt&&$&&e.texStorage2D(i.TEXTURE_2D,Pt,Gt,$t[0].width,$t[0].height);for(let ot=0,Et=$t.length;ot<Et;ot++)zt=$t[ot],b.format!==Qe?kt!==null?Qt?e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,zt.width,zt.height,kt,zt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Gt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage2D(i.TEXTURE_2D,ot,0,0,zt.width,zt.height,kt,Ht,zt.data):e.texImage2D(i.TEXTURE_2D,ot,Gt,zt.width,zt.height,0,kt,Ht,zt.data)}else if(b.isDataArrayTexture)Qt?($&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Gt,ct.width,ct.height,ct.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,kt,Ht,ct.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,ct.width,ct.height,ct.depth,0,kt,Ht,ct.data);else if(b.isData3DTexture)Qt?($&&e.texStorage3D(i.TEXTURE_3D,Pt,Gt,ct.width,ct.height,ct.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,kt,Ht,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,ct.width,ct.height,ct.depth,0,kt,Ht,ct.data);else if(b.isFramebufferTexture){if($)if(Qt)e.texStorage2D(i.TEXTURE_2D,Pt,Gt,ct.width,ct.height);else{let ot=ct.width,Et=ct.height;for(let Dt=0;Dt<Pt;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Gt,ot,Et,0,kt,Ht,null),ot>>=1,Et>>=1}}else if($t.length>0&&Ot){Qt&&$&&e.texStorage2D(i.TEXTURE_2D,Pt,Gt,$t[0].width,$t[0].height);for(let ot=0,Et=$t.length;ot<Et;ot++)zt=$t[ot],Qt?e.texSubImage2D(i.TEXTURE_2D,ot,0,0,kt,Ht,zt):e.texImage2D(i.TEXTURE_2D,ot,Gt,kt,Ht,zt);b.generateMipmaps=!1}else Qt?($&&e.texStorage2D(i.TEXTURE_2D,Pt,Gt,ct.width,ct.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,Ht,ct)):e.texImage2D(i.TEXTURE_2D,0,Gt,kt,Ht,ct);C(b,Ot)&&V(gt),vt.__version=B.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ut(P,b,et){if(b.image.length!==6)return;const gt=nt(P,b),mt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+et);const B=n.get(mt);if(mt.version!==B.__version||gt===!0){e.activeTexture(i.TEXTURE0+et),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const vt=b.isCompressedTexture||b.image[0].isCompressedTexture,yt=b.image[0]&&b.image[0].isDataTexture,ct=[];for(let ot=0;ot<6;ot++)!vt&&!yt?ct[ot]=x(b.image[ot],!1,!0,u):ct[ot]=yt?b.image[ot].image:b.image[ot],ct[ot]=Jt(b,ct[ot]);const Ot=ct[0],kt=y(Ot)||o,Ht=r.convert(b.format,b.colorSpace),Gt=r.convert(b.type),zt=N(b.internalFormat,Ht,Gt,b.colorSpace),$t=o&&b.isVideoTexture!==!0,Qt=B.__version===void 0||gt===!0;let $=E(b,Ot,kt);tt(i.TEXTURE_CUBE_MAP,b,kt);let Pt;if(vt){$t&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,$,zt,Ot.width,Ot.height);for(let ot=0;ot<6;ot++){Pt=ct[ot].mipmaps;for(let Et=0;Et<Pt.length;Et++){const Dt=Pt[Et];b.format!==Qe?Ht!==null?$t?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Et,0,0,Dt.width,Dt.height,Ht,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Et,zt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Et,0,0,Dt.width,Dt.height,Ht,Gt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Et,zt,Dt.width,Dt.height,0,Ht,Gt,Dt.data)}}}else{Pt=b.mipmaps,$t&&Qt&&(Pt.length>0&&$++,e.texStorage2D(i.TEXTURE_CUBE_MAP,$,zt,ct[0].width,ct[0].height));for(let ot=0;ot<6;ot++)if(yt){$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,ct[ot].width,ct[ot].height,Ht,Gt,ct[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,zt,ct[ot].width,ct[ot].height,0,Ht,Gt,ct[ot].data);for(let Et=0;Et<Pt.length;Et++){const ie=Pt[Et].image[ot].image;$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Et+1,0,0,ie.width,ie.height,Ht,Gt,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Et+1,zt,ie.width,ie.height,0,Ht,Gt,ie.data)}}else{$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ht,Gt,ct[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,zt,Ht,Gt,ct[ot]);for(let Et=0;Et<Pt.length;Et++){const Dt=Pt[Et];$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Et+1,0,0,Ht,Gt,Dt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Et+1,zt,Ht,Gt,Dt.image[ot])}}}C(b,kt)&&V(i.TEXTURE_CUBE_MAP),B.__version=mt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function dt(P,b,et,gt,mt){const B=r.convert(et.format,et.colorSpace),vt=r.convert(et.type),yt=N(et.internalFormat,B,vt,et.colorSpace);n.get(b).__hasExternalTextures||(mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,0,yt,b.width,b.height,b.depth,0,B,vt,null):e.texImage2D(mt,0,yt,b.width,b.height,0,B,vt,null)),e.bindFramebuffer(i.FRAMEBUFFER,P),Mt(b)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,mt,n.get(et).__webglTexture,0,Vt(b)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,gt,mt,n.get(et).__webglTexture,0),e.bindFramebuffer(i.FRAMEBUFFER,null)}function q(P,b,et){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer&&!b.stencilBuffer){let gt=i.DEPTH_COMPONENT16;if(et||Mt(b)){const mt=b.depthTexture;mt&&mt.isDepthTexture&&(mt.type===Tn?gt=i.DEPTH_COMPONENT32F:mt.type===An&&(gt=i.DEPTH_COMPONENT24));const B=Vt(b);Mt(b)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B,gt,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,B,gt,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,gt,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(b.depthBuffer&&b.stencilBuffer){const gt=Vt(b);et&&Mt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,i.DEPTH24_STENCIL8,b.width,b.height):Mt(b)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const gt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let mt=0;mt<gt.length;mt++){const B=gt[mt],vt=r.convert(B.format,B.colorSpace),yt=r.convert(B.type),ct=N(B.internalFormat,vt,yt,B.colorSpace),Ot=Vt(b);et&&Mt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,ct,b.width,b.height):Mt(b)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot,ct,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ct,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const gt=n.get(b.depthTexture).__webglTexture,mt=Vt(b);if(b.depthTexture.format===Gn)Mt(b)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0);else if(b.depthTexture.format===xi)Mt(b)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function pt(P){const b=n.get(P),et=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");bt(b.__webglFramebuffer,P)}else if(et){b.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[gt]),b.__webglDepthbuffer[gt]=i.createRenderbuffer(),q(b.__webglDepthbuffer[gt],P,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),q(b.__webglDepthbuffer,P,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(P,b,et){const gt=n.get(P);b!==void 0&&dt(gt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),et!==void 0&&pt(P)}function lt(P){const b=P.texture,et=n.get(P),gt=n.get(b);P.addEventListener("dispose",W),P.isWebGLMultipleRenderTargets!==!0&&(gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture()),gt.__version=b.version,s.memory.textures++);const mt=P.isWebGLCubeRenderTarget===!0,B=P.isWebGLMultipleRenderTargets===!0,vt=y(P)||o;if(mt){et.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)et.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(et.__webglFramebuffer=i.createFramebuffer(),B)if(a.drawBuffers){const yt=P.texture;for(let ct=0,Ot=yt.length;ct<Ot;ct++){const kt=n.get(yt[ct]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Mt(P)===!1){const yt=B?b:[b];et.__webglMultisampledFramebuffer=i.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let ct=0;ct<yt.length;ct++){const Ot=yt[ct];et.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,et.__webglColorRenderbuffer[ct]);const kt=r.convert(Ot.format,Ot.colorSpace),Ht=r.convert(Ot.type),Gt=N(Ot.internalFormat,kt,Ht,Ot.colorSpace,P.isXRRenderTarget===!0),zt=Vt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Gt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,et.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(et.__webglDepthRenderbuffer=i.createRenderbuffer(),q(et.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,gt.__webglTexture),tt(i.TEXTURE_CUBE_MAP,b,vt);for(let yt=0;yt<6;yt++)dt(et.__webglFramebuffer[yt],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt);C(b,vt)&&V(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(B){const yt=P.texture;for(let ct=0,Ot=yt.length;ct<Ot;ct++){const kt=yt[ct],Ht=n.get(kt);e.bindTexture(i.TEXTURE_2D,Ht.__webglTexture),tt(i.TEXTURE_2D,kt,vt),dt(et.__webglFramebuffer,P,kt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D),C(kt,vt)&&V(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?yt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(yt,gt.__webglTexture),tt(yt,b,vt),dt(et.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,yt),C(b,vt)&&V(yt),e.unbindTexture()}P.depthBuffer&&pt(P)}function qt(P){const b=y(P)||o,et=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let gt=0,mt=et.length;gt<mt;gt++){const B=et[gt];if(C(B,b)){const vt=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,yt=n.get(B).__webglTexture;e.bindTexture(vt,yt),V(vt),e.unbindTexture()}}}function Tt(P){if(o&&P.samples>0&&Mt(P)===!1){const b=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],et=P.width,gt=P.height;let mt=i.COLOR_BUFFER_BIT;const B=[],vt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(P),ct=P.isWebGLMultipleRenderTargets===!0;if(ct)for(let Ot=0;Ot<b.length;Ot++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Ot=0;Ot<b.length;Ot++){B.push(i.COLOR_ATTACHMENT0+Ot),P.depthBuffer&&B.push(vt);const kt=yt.__ignoreDepthValues!==void 0?yt.__ignoreDepthValues:!1;if(kt===!1&&(P.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),ct&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Ot]),kt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[vt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[vt])),ct){const Ht=n.get(b[Ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,et,gt,0,0,et,gt,mt,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,B)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let Ot=0;Ot<b.length;Ot++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Ot]);const kt=n.get(b[Ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}}function Vt(P){return Math.min(l,P.samples)}function Mt(P){const b=n.get(P);return o&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function jt(P){const b=s.render.frame;v.get(P)!==b&&(v.set(P,b),P.update())}function Jt(P,b){const et=P.colorSpace,gt=P.format,mt=P.type;return P.isCompressedTexture===!0||P.format===es||et!==en&&et!==kn&&(et===ne?o===!1?t.has("EXT_sRGB")===!0&&gt===Qe?(P.format=es,P.minFilter=qe,P.generateMipmaps=!1):b=oo.sRGBToLinear(b):(gt!==Qe||mt!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=O,this.setTexture3D=L,this.setTextureCube=R,this.rebindTextures=rt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Mt}function Rf(i,t,e){const n=e.isWebGL2;function a(r,s=kn){let o;if(r===Cn)return i.UNSIGNED_BYTE;if(r===Ja)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Qa)return i.UNSIGNED_SHORT_5_5_5_1;if(r===hl)return i.BYTE;if(r===ul)return i.SHORT;if(r===os)return i.UNSIGNED_SHORT;if(r===Za)return i.INT;if(r===An)return i.UNSIGNED_INT;if(r===Tn)return i.FLOAT;if(r===Ii)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===dl)return i.ALPHA;if(r===Qe)return i.RGBA;if(r===fl)return i.LUMINANCE;if(r===pl)return i.LUMINANCE_ALPHA;if(r===Gn)return i.DEPTH_COMPONENT;if(r===xi)return i.DEPTH_STENCIL;if(r===es)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ml)return i.RED;if(r===to)return i.RED_INTEGER;if(r===vl)return i.RG;if(r===eo)return i.RG_INTEGER;if(r===no)return i.RGBA_INTEGER;if(r===gr||r===_r||r===xr||r===yr)if(s===ne)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===gr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_r)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===gr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_r)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ts||r===Rs||r===Cs||r===Ps)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ts)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rs)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cs)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ps)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gl)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ls||r===Is)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ls)return s===ne?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Is)return s===ne?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ds||r===Us||r===Ns||r===Fs||r===Bs||r===Os||r===zs||r===Vs||r===Hs||r===Gs||r===Ws||r===ks||r===Xs||r===qs)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ds)return s===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Us)return s===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ns)return s===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fs)return s===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bs)return s===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Os)return s===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zs)return s===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vs)return s===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hs)return s===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gs)return s===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ws)return s===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ks)return s===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xs)return s===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qs)return s===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mr)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Mr)return s===ne?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===_l||r===Ys||r===$s||r===js)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Mr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ys)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$s)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===js)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hn?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:a}}class Cf extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class sr extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pf={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let a=null,r=null,s=null;const o=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){s=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),f=this._getHandJoint(u,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],d=c.position.distanceTo(l.position),p=.02,v=.005;u.inputState.pinching&&d>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(a=e.getPose(t.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pf)))}return o!==null&&(o.visible=a!==null),h!==null&&(h.visible=r!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new sr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Lf extends ze{constructor(t,e,n,a,r,s,o,h,u,c){if(c=c!==void 0?c:Gn,c!==Gn&&c!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Gn&&(n=An),n===void 0&&c===xi&&(n=Hn),super(null,a,r,s,o,h,c,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ue,this.minFilter=h!==void 0?h:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class If extends $n{constructor(t,e){super();const n=this;let a=null,r=1,s=null,o="local-floor",h=1,u=null,c=null,l=null,d=null,p=null,v=null;const g=e.getContextAttributes();let m=null,f=null;const _=[],x=[];let y=null;const M=new Ye;M.layers.enable(1),M.viewport=new Ae;const C=new Ye;C.layers.enable(2),C.viewport=new Ae;const V=[M,C],N=new Cf;N.layers.enable(1),N.layers.enable(2);let E=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(L){y=L},this.getController=function(L){let R=_[L];return R===void 0&&(R=new Xr,_[L]=R),R.getTargetRaySpace()},this.getControllerGrip=function(L){let R=_[L];return R===void 0&&(R=new Xr,_[L]=R),R.getGripSpace()},this.getHand=function(L){let R=_[L];return R===void 0&&(R=new Xr,_[L]=R),R.getHandSpace()};function I(L){const R=x.indexOf(L.inputSource);if(R===-1)return;const A=_[R];A!==void 0&&(A.update(L.inputSource,L.frame,u||s),A.dispatchEvent({type:L.type,data:L.inputSource}))}function W(){a.removeEventListener("select",I),a.removeEventListener("selectstart",I),a.removeEventListener("selectend",I),a.removeEventListener("squeeze",I),a.removeEventListener("squeezestart",I),a.removeEventListener("squeezeend",I),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",D);for(let L=0;L<_.length;L++){const R=x[L];R!==null&&(x[L]=null,_[L].disconnect(R))}E=null,S=null,t.setRenderTarget(m),p=null,d=null,l=null,a=null,f=null,O.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(L){u=L},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(L){if(a=L,a!==null){if(m=t.getRenderTarget(),a.addEventListener("select",I),a.addEventListener("selectstart",I),a.addEventListener("selectend",I),a.addEventListener("squeeze",I),a.addEventListener("squeezestart",I),a.addEventListener("squeezeend",I),a.addEventListener("end",W),a.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await e.makeXRCompatible(),a.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const R={antialias:a.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,e,R),a.updateRenderState({baseLayer:p}),f=new Xn(p.framebufferWidth,p.framebufferHeight,{format:Qe,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let R=null,A=null,T=null;g.depth&&(T=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,R=g.stencil?xi:Gn,A=g.stencil?Hn:An);const H={colorFormat:e.RGBA8,depthFormat:T,scaleFactor:r};l=new XRWebGLBinding(a,e),d=l.createProjectionLayer(H),a.updateRenderState({layers:[d]}),f=new Xn(d.textureWidth,d.textureHeight,{format:Qe,type:Cn,depthTexture:new Lf(d.textureWidth,d.textureHeight,A,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const tt=t.properties.get(f);tt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(h),u=null,s=await a.requestReferenceSpace(o),O.setContext(a),O.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function D(L){for(let R=0;R<L.removed.length;R++){const A=L.removed[R],T=x.indexOf(A);T>=0&&(x[T]=null,_[T].disconnect(A))}for(let R=0;R<L.added.length;R++){const A=L.added[R];let T=x.indexOf(A);if(T===-1){for(let tt=0;tt<_.length;tt++)if(tt>=x.length){x.push(A),T=tt;break}else if(x[tt]===null){x[tt]=A,T=tt;break}if(T===-1)break}const H=_[T];H&&H.connect(A)}}const k=new at,X=new at;function st(L,R,A){k.setFromMatrixPosition(R.matrixWorld),X.setFromMatrixPosition(A.matrixWorld);const T=k.distanceTo(X),H=R.projectionMatrix.elements,tt=A.projectionMatrix.elements,nt=H[14]/(H[10]-1),K=H[14]/(H[10]+1),ut=(H[9]+1)/H[5],dt=(H[9]-1)/H[5],q=(H[8]-1)/H[0],bt=(tt[8]+1)/tt[0],pt=nt*q,rt=nt*bt,lt=T/(-q+bt),qt=lt*-q;R.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(qt),L.translateZ(lt),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const Tt=nt+lt,Vt=K+lt,Mt=pt-qt,jt=rt+(T-qt),Jt=ut*K/Vt*Tt,P=dt*K/Vt*Tt;L.projectionMatrix.makePerspective(Mt,jt,Jt,P,Tt,Vt),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function F(L,R){R===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(R.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCameraXR=function(L){if(a===null)return L;y&&(L=y),N.near=C.near=M.near=L.near,N.far=C.far=M.far=L.far,(E!==N.near||S!==N.far)&&(a.updateRenderState({depthNear:N.near,depthFar:N.far}),E=N.near,S=N.far);const R=L.parent,A=N.cameras;F(N,R);for(let T=0;T<A.length;T++)F(A[T],R);return A.length===2?st(N,M,C):N.projectionMatrix.copy(M.projectionMatrix),y&&U(N,R),N};function U(L,R){const A=y;R===null?A.matrix.copy(L.matrixWorld):(A.matrix.copy(R.matrixWorld),A.matrix.invert(),A.matrix.multiply(L.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0);const T=A.children;for(let H=0,tt=T.length;H<tt;H++)T[H].updateMatrixWorld(!0);A.projectionMatrix.copy(L.projectionMatrix),A.projectionMatrixInverse.copy(L.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=ns*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getFoveation=function(){if(!(d===null&&p===null))return h},this.setFoveation=function(L){h=L,d!==null&&(d.fixedFoveation=L),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=L)};let Z=null;function Y(L,R){if(c=R.getViewerPose(u||s),v=R,c!==null){const A=c.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let T=!1;A.length!==N.cameras.length&&(N.cameras.length=0,T=!0);for(let H=0;H<A.length;H++){const tt=A[H];let nt=null;if(p!==null)nt=p.getViewport(tt);else{const ut=l.getViewSubImage(d,tt);nt=ut.viewport,H===0&&(t.setRenderTargetTextures(f,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(f))}let K=V[H];K===void 0&&(K=new Ye,K.layers.enable(H),K.viewport=new Ae,V[H]=K),K.matrix.fromArray(tt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(tt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(nt.x,nt.y,nt.width,nt.height),H===0&&(N.matrix.copy(K.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),T===!0&&N.cameras.push(K)}}for(let A=0;A<_.length;A++){const T=x[A],H=_[A];T!==null&&H!==void 0&&H.update(T,R,u||s)}Z&&Z(L,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),v=null}const O=new _o;O.setAnimationLoop(Y),this.setAnimationLoop=function(L){Z=L},this.dispose=function(){}}}function Df(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,vo(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,_,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),l(m,f)):f.isMeshPhongMaterial?(r(m,f),c(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?h(m,f,_,x):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Oe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Oe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=t.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function h(m,f,_,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function l(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Oe&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Uf(i,t,e,n){let a={},r={},s=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function u(_,x){let y=a[_.id];y===void 0&&(v(_),y=c(_),a[_.id]=y,_.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(_,M);const C=t.render.frame;r[_.id]!==C&&(d(_),r[_.id]=C)}function c(_){const x=l();_.__bindingPointIndex=x;const y=i.createBuffer(),M=_.__size,C=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,M,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function l(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=a[_.id],y=_.uniforms,M=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,V=y.length;C<V;C++){const N=y[C];if(p(N,C,M)===!0){const E=N.__offset,S=Array.isArray(N.value)?N.value:[N.value];let I=0;for(let W=0;W<S.length;W++){const D=S[W],k=g(D);typeof D=="number"?(N.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,E+I,N.__data)):D.isMatrix3?(N.__data[0]=D.elements[0],N.__data[1]=D.elements[1],N.__data[2]=D.elements[2],N.__data[3]=D.elements[0],N.__data[4]=D.elements[3],N.__data[5]=D.elements[4],N.__data[6]=D.elements[5],N.__data[7]=D.elements[0],N.__data[8]=D.elements[6],N.__data[9]=D.elements[7],N.__data[10]=D.elements[8],N.__data[11]=D.elements[0]):(D.toArray(N.__data,I),I+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,E,N.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,x,y){const M=_.value;if(y[x]===void 0){if(typeof M=="number")y[x]=M;else{const C=Array.isArray(M)?M:[M],V=[];for(let N=0;N<C.length;N++)V.push(C[N].clone());y[x]=V}return!0}else if(typeof M=="number"){if(y[x]!==M)return y[x]=M,!0}else{const C=Array.isArray(y[x])?y[x]:[y[x]],V=Array.isArray(M)?M:[M];for(let N=0;N<C.length;N++){const E=C[N];if(E.equals(V[N])===!1)return E.copy(V[N]),!0}}return!1}function v(_){const x=_.uniforms;let y=0;const M=16;let C=0;for(let V=0,N=x.length;V<N;V++){const E=x[V],S={boundary:0,storage:0},I=Array.isArray(E.value)?E.value:[E.value];for(let W=0,D=I.length;W<D;W++){const k=I[W],X=g(k);S.boundary+=X.boundary,S.storage+=X.storage}if(E.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,V>0){C=y%M;const W=M-C;C!==0&&W-S.boundary<0&&(y+=M-C,E.__offset=y)}y+=S.storage}return C=y%M,C>0&&(y+=M-C),_.__size=y,_.__cache={},this}function g(_){const x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=s.indexOf(x.__bindingPointIndex);s.splice(y,1),i.deleteBuffer(a[x.id]),delete a[x.id],delete r[x.id]}function f(){for(const _ in a)i.deleteBuffer(a[_]);s=[],a={},r={}}return{bind:h,update:u,dispose:f}}function Nf(){const i=Di("canvas");return i.style.display="block",i}class wo{constructor(t={}){const{canvas:e=Nf(),context:n=null,depth:a=!0,stencil:r=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:l=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=s;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const f=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ne,this.useLegacyLights=!0,this.toneMapping=yn,this.toneMappingExposure=1;const x=this;let y=!1,M=0,C=0,V=null,N=-1,E=null;const S=new Ae,I=new Ae;let W=null;const D=new de(0);let k=0,X=e.width,st=e.height,F=1,U=null,Z=null;const Y=new Ae(0,0,X,st),O=new Ae(0,0,X,st);let L=!1;const R=new hs;let A=!1,T=!1,H=null;const tt=new Ee,nt=new re,K=new at,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function dt(){return V===null?F:1}let q=n;function bt(w,z){for(let j=0;j<w.length;j++){const G=w[j],J=e.getContext(G,z);if(J!==null)return J}return null}try{const w={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${as}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",Et,!1),q===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),q=bt(z,w),q===null)throw bt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let pt,rt,lt,qt,Tt,Vt,Mt,jt,Jt,P,b,et,gt,mt,B,vt,yt,ct,Ot,kt,Ht,Gt,zt,$t;function Qt(){pt=new Xu(q),rt=new zu(q,pt,t),pt.init(rt),Gt=new Rf(q,pt,rt),lt=new Af(q,pt,rt),qt=new $u(q),Tt=new df,Vt=new Tf(q,pt,lt,Tt,rt,Gt,qt),Mt=new Hu(x),jt=new ku(x),Jt=new ac(q,rt),zt=new Bu(q,pt,Jt,rt),P=new qu(q,Jt,qt,zt),b=new Ju(q,P,Jt,qt),Ot=new Zu(q,rt,Vt),vt=new Vu(Tt),et=new uf(x,Mt,jt,pt,rt,zt,vt),gt=new Df(x,Tt),mt=new pf,B=new yf(pt,rt),ct=new Fu(x,Mt,jt,lt,b,d,h),yt=new bf(x,b,rt),$t=new Uf(q,qt,rt,lt),kt=new Ou(q,pt,qt,rt),Ht=new Yu(q,pt,qt,rt),qt.programs=et.programs,x.capabilities=rt,x.extensions=pt,x.properties=Tt,x.renderLists=mt,x.shadowMap=yt,x.state=lt,x.info=qt}Qt();const $=new If(x,q);this.xr=$,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const w=pt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=pt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(w){w!==void 0&&(F=w,this.setSize(X,st,!1))},this.getSize=function(w){return w.set(X,st)},this.setSize=function(w,z,j=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,st=z,e.width=Math.floor(w*F),e.height=Math.floor(z*F),j===!0&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(X*F,st*F).floor()},this.setDrawingBufferSize=function(w,z,j){X=w,st=z,F=j,e.width=Math.floor(w*j),e.height=Math.floor(z*j),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(Y)},this.setViewport=function(w,z,j,G){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,z,j,G),lt.viewport(S.copy(Y).multiplyScalar(F).floor())},this.getScissor=function(w){return w.copy(O)},this.setScissor=function(w,z,j,G){w.isVector4?O.set(w.x,w.y,w.z,w.w):O.set(w,z,j,G),lt.scissor(I.copy(O).multiplyScalar(F).floor())},this.getScissorTest=function(){return L},this.setScissorTest=function(w){lt.setScissorTest(L=w)},this.setOpaqueSort=function(w){U=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(w=!0,z=!0,j=!0){let G=0;if(w){let J=!1;if(V!==null){const Q=V.texture.format;J=Q===no||Q===eo||Q===to}if(J){const Q=V.texture.type,St=Q===Cn||Q===An||Q===os||Q===Hn||Q===Ja||Q===Qa,Ct=ct.getClearColor(),Xt=ct.getClearAlpha(),Bt=Ct.r,Nt=Ct.g,wt=Ct.b,ae=Tt.get(V).__webglFramebuffer;St?(p[0]=Bt,p[1]=Nt,p[2]=wt,p[3]=Xt,q.clearBufferuiv(q.COLOR,ae,p)):(v[0]=Bt,v[1]=Nt,v[2]=wt,v[3]=Xt,q.clearBufferiv(q.COLOR,ae,v))}else G|=q.COLOR_BUFFER_BIT}z&&(G|=q.DEPTH_BUFFER_BIT),j&&(G|=q.STENCIL_BUFFER_BIT),q.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),mt.dispose(),B.dispose(),Tt.dispose(),Mt.dispose(),jt.dispose(),b.dispose(),zt.dispose(),$t.dispose(),et.dispose(),$.dispose(),$.removeEventListener("sessionstart",ee),$.removeEventListener("sessionend",ht),H&&(H.dispose(),H=null),ft.stop()};function Pt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=qt.autoReset,z=yt.enabled,j=yt.autoUpdate,G=yt.needsUpdate,J=yt.type;Qt(),qt.autoReset=w,yt.enabled=z,yt.autoUpdate=j,yt.needsUpdate=G,yt.type=J}function Et(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Dt(w){const z=w.target;z.removeEventListener("dispose",Dt),ie(z)}function ie(w){he(w),Tt.remove(w)}function he(w){const z=Tt.get(w).programs;z!==void 0&&(z.forEach(function(j){et.releaseProgram(j)}),w.isShaderMaterial&&et.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,j,G,J,Q){z===null&&(z=ut);const St=J.isMesh&&J.matrixWorld.determinant()<0,Ct=Rt(w,z,j,G,J);lt.setMaterial(G,St);let Xt=j.index,Bt=1;G.wireframe===!0&&(Xt=P.getWireframeAttribute(j),Bt=2);const Nt=j.drawRange,wt=j.attributes.position;let ae=Nt.start*Bt,ce=(Nt.start+Nt.count)*Bt;Q!==null&&(ae=Math.max(ae,Q.start*Bt),ce=Math.min(ce,(Q.start+Q.count)*Bt)),Xt!==null?(ae=Math.max(ae,0),ce=Math.min(ce,Xt.count)):wt!=null&&(ae=Math.max(ae,0),ce=Math.min(ce,wt.count));const me=ce-ae;if(me<0||me===1/0)return;zt.setup(J,G,Ct,j,Xt);let Me,le=kt;if(Xt!==null&&(Me=Jt.get(Xt),le=Ht,le.setIndex(Me)),J.isMesh)G.wireframe===!0?(lt.setLineWidth(G.wireframeLinewidth*dt()),le.setMode(q.LINES)):le.setMode(q.TRIANGLES);else if(J.isLine){let Yt=G.linewidth;Yt===void 0&&(Yt=1),lt.setLineWidth(Yt*dt()),J.isLineSegments?le.setMode(q.LINES):J.isLineLoop?le.setMode(q.LINE_LOOP):le.setMode(q.LINE_STRIP)}else J.isPoints?le.setMode(q.POINTS):J.isSprite&&le.setMode(q.TRIANGLES);if(J.isInstancedMesh)le.renderInstances(ae,me,J.count);else if(j.isInstancedBufferGeometry){const Yt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ve=Math.min(j.instanceCount,Yt);le.renderInstances(ae,me,Ve)}else le.render(ae,me)},this.compile=function(w,z){function j(G,J,Q){G.transparent===!0&&G.side===_n&&G.forceSinglePass===!1?(G.side=Oe,G.needsUpdate=!0,Lt(G,J,Q),G.side=Pn,G.needsUpdate=!0,Lt(G,J,Q),G.side=_n):Lt(G,J,Q)}m=B.get(w),m.init(),_.push(m),w.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(x.useLegacyLights),w.traverse(function(G){const J=G.material;if(J)if(Array.isArray(J))for(let Q=0;Q<J.length;Q++){const St=J[Q];j(St,w,G)}else j(J,w,G)}),_.pop(),m=null};let fe=null;function Fe(w){fe&&fe(w)}function ee(){ft.stop()}function ht(){ft.start()}const ft=new _o;ft.setAnimationLoop(Fe),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(w){fe=w,$.setAnimationLoop(w),w===null?ft.stop():ft.start()},$.addEventListener("sessionstart",ee),$.addEventListener("sessionend",ht),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(z=$.updateCameraXR(z)),w.isScene===!0&&w.onBeforeRender(x,w,z,V),m=B.get(w,_.length),m.init(),_.push(m),tt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),R.setFromProjectionMatrix(tt),T=this.localClippingEnabled,A=vt.init(this.clippingPlanes,T),g=mt.get(w,f.length),g.init(),f.push(g),_t(w,z,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(U,Z),A===!0&&vt.beginShadows();const j=m.state.shadowsArray;if(yt.render(j,w,z),A===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,ct.render(g,w),m.setupLights(x.useLegacyLights),z.isArrayCamera){const G=z.cameras;for(let J=0,Q=G.length;J<Q;J++){const St=G[J];xt(g,w,St,St.viewport)}}else xt(g,w,z);V!==null&&(Vt.updateMultisampleRenderTarget(V),Vt.updateRenderTargetMipmap(V)),w.isScene===!0&&w.onAfterRender(x,w,z),zt.resetDefaultState(),N=-1,E=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function _t(w,z,j,G){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||R.intersectsSprite(w)){G&&K.setFromMatrixPosition(w.matrixWorld).applyMatrix4(tt);const St=b.update(w),Ct=w.material;Ct.visible&&g.push(w,St,Ct,j,K.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||R.intersectsObject(w))){w.isSkinnedMesh&&w.skeleton.frame!==qt.render.frame&&(w.skeleton.update(),w.skeleton.frame=qt.render.frame);const St=b.update(w),Ct=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),K.copy(w.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),K.copy(St.boundingSphere.center)),K.applyMatrix4(w.matrixWorld).applyMatrix4(tt)),Array.isArray(Ct)){const Xt=St.groups;for(let Bt=0,Nt=Xt.length;Bt<Nt;Bt++){const wt=Xt[Bt],ae=Ct[wt.materialIndex];ae&&ae.visible&&g.push(w,St,ae,j,K.z,wt)}}else Ct.visible&&g.push(w,St,Ct,j,K.z,null)}}const Q=w.children;for(let St=0,Ct=Q.length;St<Ct;St++)_t(Q[St],z,j,G)}function xt(w,z,j,G){const J=w.opaque,Q=w.transmissive,St=w.transparent;m.setupLightsView(j),A===!0&&vt.setGlobalState(x.clippingPlanes,j),Q.length>0&&Kt(J,Q,z,j),G&&lt.viewport(S.copy(G)),J.length>0&&It(J,z,j),Q.length>0&&It(Q,z,j),St.length>0&&It(St,z,j),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Kt(w,z,j,G){const J=rt.isWebGL2;H===null&&(H=new Xn(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")?Ii:Cn,minFilter:Li,samples:J&&o===!0?4:0})),x.getDrawingBufferSize(nt),J?H.setSize(nt.x,nt.y):H.setSize(is(nt.x),is(nt.y));const Q=x.getRenderTarget();x.setRenderTarget(H),x.getClearColor(D),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear();const St=x.toneMapping;x.toneMapping=yn,It(w,j,G),Vt.updateMultisampleRenderTarget(H),Vt.updateRenderTargetMipmap(H);let Ct=!1;for(let Xt=0,Bt=z.length;Xt<Bt;Xt++){const Nt=z[Xt],wt=Nt.object,ae=Nt.geometry,ce=Nt.material,me=Nt.group;if(ce.side===_n&&wt.layers.test(G.layers)){const Me=ce.side;ce.side=Oe,ce.needsUpdate=!0,At(wt,j,G,ae,ce,me),ce.side=Me,ce.needsUpdate=!0,Ct=!0}}Ct===!0&&(Vt.updateMultisampleRenderTarget(H),Vt.updateRenderTargetMipmap(H)),x.setRenderTarget(Q),x.setClearColor(D,k),x.toneMapping=St}function It(w,z,j){const G=z.isScene===!0?z.overrideMaterial:null;for(let J=0,Q=w.length;J<Q;J++){const St=w[J],Ct=St.object,Xt=St.geometry,Bt=G===null?St.material:G,Nt=St.group;Ct.layers.test(j.layers)&&At(Ct,z,j,Xt,Bt,Nt)}}function At(w,z,j,G,J,Q){w.onBeforeRender(x,z,j,G,J,Q),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(x,z,j,G,w,Q),J.transparent===!0&&J.side===_n&&J.forceSinglePass===!1?(J.side=Oe,J.needsUpdate=!0,x.renderBufferDirect(j,z,G,J,w,Q),J.side=Pn,J.needsUpdate=!0,x.renderBufferDirect(j,z,G,J,w,Q),J.side=_n):x.renderBufferDirect(j,z,G,J,w,Q),w.onAfterRender(x,z,j,G,J,Q)}function Lt(w,z,j){z.isScene!==!0&&(z=ut);const G=Tt.get(w),J=m.state.lights,Q=m.state.shadowsArray,St=J.state.version,Ct=et.getParameters(w,J.state,Q,z,j),Xt=et.getProgramCacheKey(Ct);let Bt=G.programs;G.environment=w.isMeshStandardMaterial?z.environment:null,G.fog=z.fog,G.envMap=(w.isMeshStandardMaterial?jt:Mt).get(w.envMap||G.environment),Bt===void 0&&(w.addEventListener("dispose",Dt),Bt=new Map,G.programs=Bt);let Nt=Bt.get(Xt);if(Nt!==void 0){if(G.currentProgram===Nt&&G.lightsStateVersion===St)return it(w,Ct),Nt}else Ct.uniforms=et.getUniforms(w),w.onBuild(j,Ct,x),w.onBeforeCompile(Ct,x),Nt=et.acquireProgram(Ct,Xt),Bt.set(Xt,Nt),G.uniforms=Ct.uniforms;const wt=G.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(wt.clippingPlanes=vt.uniform),it(w,Ct),G.needsLights=Wt(w),G.lightsStateVersion=St,G.needsLights&&(wt.ambientLightColor.value=J.state.ambient,wt.lightProbe.value=J.state.probe,wt.directionalLights.value=J.state.directional,wt.directionalLightShadows.value=J.state.directionalShadow,wt.spotLights.value=J.state.spot,wt.spotLightShadows.value=J.state.spotShadow,wt.rectAreaLights.value=J.state.rectArea,wt.ltc_1.value=J.state.rectAreaLTC1,wt.ltc_2.value=J.state.rectAreaLTC2,wt.pointLights.value=J.state.point,wt.pointLightShadows.value=J.state.pointShadow,wt.hemisphereLights.value=J.state.hemi,wt.directionalShadowMap.value=J.state.directionalShadowMap,wt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,wt.spotShadowMap.value=J.state.spotShadowMap,wt.spotLightMatrix.value=J.state.spotLightMatrix,wt.spotLightMap.value=J.state.spotLightMap,wt.pointShadowMap.value=J.state.pointShadowMap,wt.pointShadowMatrix.value=J.state.pointShadowMatrix);const ae=Nt.getUniforms(),ce=or.seqWithValue(ae.seq,wt);return G.currentProgram=Nt,G.uniformsList=ce,Nt}function it(w,z){const j=Tt.get(w);j.outputColorSpace=z.outputColorSpace,j.instancing=z.instancing,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function Rt(w,z,j,G,J){z.isScene!==!0&&(z=ut),Vt.resetTextureUnits();const Q=z.fog,St=G.isMeshStandardMaterial?z.environment:null,Ct=V===null?x.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:en,Xt=(G.isMeshStandardMaterial?jt:Mt).get(G.envMap||St),Bt=G.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Nt=!!j.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),wt=!!j.morphAttributes.position,ae=!!j.morphAttributes.normal,ce=!!j.morphAttributes.color,me=G.toneMapped?x.toneMapping:yn,Me=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,le=Me!==void 0?Me.length:0,Yt=Tt.get(G),Ve=m.state.lights;if(A===!0&&(T===!0||w!==E)){const pe=w===E&&G.id===N;vt.setState(G,w,pe)}let te=!1;G.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Ve.state.version||Yt.outputColorSpace!==Ct||J.isInstancedMesh&&Yt.instancing===!1||!J.isInstancedMesh&&Yt.instancing===!0||J.isSkinnedMesh&&Yt.skinning===!1||!J.isSkinnedMesh&&Yt.skinning===!0||Yt.envMap!==Xt||G.fog===!0&&Yt.fog!==Q||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==vt.numPlanes||Yt.numIntersection!==vt.numIntersection)||Yt.vertexAlphas!==Bt||Yt.vertexTangents!==Nt||Yt.morphTargets!==wt||Yt.morphNormals!==ae||Yt.morphColors!==ce||Yt.toneMapping!==me||rt.isWebGL2===!0&&Yt.morphTargetsCount!==le)&&(te=!0):(te=!0,Yt.__version=G.version);let Te=Yt.currentProgram;te===!0&&(Te=Lt(G,z,J));let Re=!1,ge=!1,xe=!1;const ue=Te.getUniforms(),Ce=Yt.uniforms;if(lt.useProgram(Te.program)&&(Re=!0,ge=!0,xe=!0),G.id!==N&&(N=G.id,ge=!0),Re||E!==w){if(ue.setValue(q,"projectionMatrix",w.projectionMatrix),rt.logarithmicDepthBuffer&&ue.setValue(q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),E!==w&&(E=w,ge=!0,xe=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const pe=ue.map.cameraPosition;pe!==void 0&&pe.setValue(q,K.setFromMatrixPosition(w.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ue.setValue(q,"isOrthographic",w.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||J.isSkinnedMesh)&&ue.setValue(q,"viewMatrix",w.matrixWorldInverse)}if(J.isSkinnedMesh){ue.setOptional(q,J,"bindMatrix"),ue.setOptional(q,J,"bindMatrixInverse");const pe=J.skeleton;pe&&(rt.floatVertexTextures?(pe.boneTexture===null&&pe.computeBoneTexture(),ue.setValue(q,"boneTexture",pe.boneTexture,Vt),ue.setValue(q,"boneTextureSize",pe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Zt=j.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0&&rt.isWebGL2===!0)&&Ot.update(J,j,Te),(ge||Yt.receiveShadow!==J.receiveShadow)&&(Yt.receiveShadow=J.receiveShadow,ue.setValue(q,"receiveShadow",J.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ce.envMap.value=Xt,Ce.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),ge&&(ue.setValue(q,"toneMappingExposure",x.toneMappingExposure),Yt.needsLights&&Ut(Ce,xe),Q&&G.fog===!0&&gt.refreshFogUniforms(Ce,Q),gt.refreshMaterialUniforms(Ce,G,F,st,H),or.upload(q,Yt.uniformsList,Ce,Vt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(or.upload(q,Yt.uniformsList,Ce,Vt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ue.setValue(q,"center",J.center),ue.setValue(q,"modelViewMatrix",J.modelViewMatrix),ue.setValue(q,"normalMatrix",J.normalMatrix),ue.setValue(q,"modelMatrix",J.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const pe=G.uniformsGroups;for(let _e=0,hn=pe.length;_e<hn;_e++)if(rt.isWebGL2){const rn=pe[_e];$t.update(rn,Te),$t.bind(rn,Te)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Te}function Ut(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Wt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(w,z,j){Tt.get(w.texture).__webglTexture=z,Tt.get(w.depthTexture).__webglTexture=j;const G=Tt.get(w);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=j===void 0,G.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,z){const j=Tt.get(w);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,j=0){V=w,M=z,C=j;let G=!0,J=null,Q=!1,St=!1;if(w){const Xt=Tt.get(w);Xt.__useDefaultFramebuffer!==void 0?(lt.bindFramebuffer(q.FRAMEBUFFER,null),G=!1):Xt.__webglFramebuffer===void 0?Vt.setupRenderTarget(w):Xt.__hasExternalTextures&&Vt.rebindTextures(w,Tt.get(w.texture).__webglTexture,Tt.get(w.depthTexture).__webglTexture);const Bt=w.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(St=!0);const Nt=Tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(J=Nt[z],Q=!0):rt.isWebGL2&&w.samples>0&&Vt.useMultisampledRTT(w)===!1?J=Tt.get(w).__webglMultisampledFramebuffer:J=Nt,S.copy(w.viewport),I.copy(w.scissor),W=w.scissorTest}else S.copy(Y).multiplyScalar(F).floor(),I.copy(O).multiplyScalar(F).floor(),W=L;if(lt.bindFramebuffer(q.FRAMEBUFFER,J)&&rt.drawBuffers&&G&&lt.drawBuffers(w,J),lt.viewport(S),lt.scissor(I),lt.setScissorTest(W),Q){const Xt=Tt.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+z,Xt.__webglTexture,j)}else if(St){const Xt=Tt.get(w.texture),Bt=z||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Xt.__webglTexture,j||0,Bt)}N=-1},this.readRenderTargetPixels=function(w,z,j,G,J,Q,St){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Ct=Ct[St]),Ct){lt.bindFramebuffer(q.FRAMEBUFFER,Ct);try{const Xt=w.texture,Bt=Xt.format,Nt=Xt.type;if(Bt!==Qe&&Gt.convert(Bt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const wt=Nt===Ii&&(pt.has("EXT_color_buffer_half_float")||rt.isWebGL2&&pt.has("EXT_color_buffer_float"));if(Nt!==Cn&&Gt.convert(Nt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===Tn&&(rt.isWebGL2||pt.has("OES_texture_float")||pt.has("WEBGL_color_buffer_float")))&&!wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-G&&j>=0&&j<=w.height-J&&q.readPixels(z,j,G,J,Gt.convert(Bt),Gt.convert(Nt),Q)}finally{const Xt=V!==null?Tt.get(V).__webglFramebuffer:null;lt.bindFramebuffer(q.FRAMEBUFFER,Xt)}}},this.copyFramebufferToTexture=function(w,z,j=0){const G=Math.pow(2,-j),J=Math.floor(z.image.width*G),Q=Math.floor(z.image.height*G);Vt.setTexture2D(z,0),q.copyTexSubImage2D(q.TEXTURE_2D,j,0,0,w.x,w.y,J,Q),lt.unbindTexture()},this.copyTextureToTexture=function(w,z,j,G=0){const J=z.image.width,Q=z.image.height,St=Gt.convert(j.format),Ct=Gt.convert(j.type);Vt.setTexture2D(j,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,j.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,j.unpackAlignment),z.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,G,w.x,w.y,J,Q,St,Ct,z.image.data):z.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,G,w.x,w.y,z.mipmaps[0].width,z.mipmaps[0].height,St,z.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,G,w.x,w.y,St,Ct,z.image),G===0&&j.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),lt.unbindTexture()},this.copyTextureToTexture3D=function(w,z,j,G,J=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Q=w.max.x-w.min.x+1,St=w.max.y-w.min.y+1,Ct=w.max.z-w.min.z+1,Xt=Gt.convert(G.format),Bt=Gt.convert(G.type);let Nt;if(G.isData3DTexture)Vt.setTexture3D(G,0),Nt=q.TEXTURE_3D;else if(G.isDataArrayTexture)Vt.setTexture2DArray(G,0),Nt=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,G.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,G.unpackAlignment);const wt=q.getParameter(q.UNPACK_ROW_LENGTH),ae=q.getParameter(q.UNPACK_IMAGE_HEIGHT),ce=q.getParameter(q.UNPACK_SKIP_PIXELS),me=q.getParameter(q.UNPACK_SKIP_ROWS),Me=q.getParameter(q.UNPACK_SKIP_IMAGES),le=j.isCompressedTexture?j.mipmaps[0]:j.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,le.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,le.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,w.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,w.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,w.min.z),j.isDataTexture||j.isData3DTexture?q.texSubImage3D(Nt,J,z.x,z.y,z.z,Q,St,Ct,Xt,Bt,le.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Nt,J,z.x,z.y,z.z,Q,St,Ct,Xt,le.data)):q.texSubImage3D(Nt,J,z.x,z.y,z.z,Q,St,Ct,Xt,Bt,le),q.pixelStorei(q.UNPACK_ROW_LENGTH,wt),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ae),q.pixelStorei(q.UNPACK_SKIP_PIXELS,ce),q.pixelStorei(q.UNPACK_SKIP_ROWS,me),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Me),J===0&&G.generateMipmaps&&q.generateMipmap(Nt),lt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Vt.setTextureCube(w,0):w.isData3DTexture?Vt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Vt.setTexture2DArray(w,0):Vt.setTexture2D(w,0),lt.unbindTexture()},this.resetState=function(){M=0,C=0,V=null,lt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ne?Wn:io}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Wn?ne:en}}class Ff extends wo{}Ff.prototype.isWebGL1Renderer=!0;class Bf extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class ds extends In{constructor(t=1,e=32,n=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(s+o,Math.PI);let u=0;const c=[],l=new at,d=new at,p=[],v=[],g=[],m=[];for(let f=0;f<=n;f++){const _=[],x=f/n;let y=0;f===0&&s===0?y=.5/e:f===n&&h===Math.PI&&(y=-.5/e);for(let M=0;M<=e;M++){const C=M/e;l.x=-t*Math.cos(a+C*r)*Math.sin(s+x*o),l.y=t*Math.cos(s+x*o),l.z=t*Math.sin(a+C*r)*Math.sin(s+x*o),v.push(l.x,l.y,l.z),d.copy(l).normalize(),g.push(d.x,d.y,d.z),m.push(C+y,1-x),_.push(u++)}c.push(_)}for(let f=0;f<n;f++)for(let _=0;_<e;_++){const x=c[f][_+1],y=c[f][_],M=c[f+1][_],C=c[f+1][_+1];(f!==0||s>0)&&p.push(x,y,C),(f!==n-1||h<Math.PI)&&p.push(y,M,C)}this.setIndex(p),this.setAttribute("position",new ln(v,3)),this.setAttribute("normal",new ln(g,3)),this.setAttribute("uv",new ln(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fs extends Bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ro,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Fa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Of{constructor(t,e,n){const a=this;let r=!1,s=0,o=0,h;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){o++,r===!1&&a.onStart!==void 0&&a.onStart(c,s,o),r=!0},this.itemEnd=function(c){s++,a.onProgress!==void 0&&a.onProgress(c,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(c){a.onError!==void 0&&a.onError(c)},this.resolveURL=function(c){return h?h(c):c},this.setURLModifier=function(c){return h=c,this},this.addHandler=function(c,l){return u.push(c,l),this},this.removeHandler=function(c){const l=u.indexOf(c);return l!==-1&&u.splice(l,2),this},this.getHandler=function(c){for(let l=0,d=u.length;l<d;l+=2){const p=u[l],v=u[l+1];if(p.global&&(p.lastIndex=0),p.test(c))return v}return null}}}const zf=new Of;class ps{constructor(t){this.manager=t!==void 0?t:zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(a,r){n.load(t,a,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class bo extends ps{constructor(t){super(t)}load(t,e,n,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Fa.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o=Di("img");function h(){c(),Fa.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(l){c(),a&&a(l),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){o.removeEventListener("load",h,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Vf extends ps{constructor(t){super(t)}load(t,e,n,a){const r=new cs;r.colorSpace=ne;const s=new bo(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function h(u){s.load(t[u],function(c){r.images[u]=c,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,a)}for(let u=0;u<t.length;++u)h(u);return r}}class Hf extends ps{constructor(t){super(t)}load(t,e,n,a){const r=new ze,s=new bo(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,a),r}}class Ao extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const qr=new Ee,Ba=new at,Oa=new at;class Gf{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ba.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ba),Oa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oa),e.updateMatrixWorld(),qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Wf extends Gf{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kf extends Ao{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Wf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xf extends Ao{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class qf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=za(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=za();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function za(){return(typeof performance>"u"?Date:performance).now()}class Va{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:as}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=as);const Ha={type:"change"},Yr={type:"start"},Ga={type:"end"};class Yf extends $n{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new at,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jn.ROTATE,MIDDLE:jn.DOLLY,RIGHT:jn.PAN},this.touches={ONE:Kn.ROTATE,TWO:Kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(B){B.addEventListener("keydown",Mt),this._domElementKeyEvents=B},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Mt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ha),n.update(),r=a.NONE},this.update=function(){const B=new at,vt=new qn().setFromUnitVectors(t.up,new at(0,1,0)),yt=vt.clone().invert(),ct=new at,Ot=new qn,kt=new at,Ht=2*Math.PI;return function(){const zt=n.object.position;B.copy(zt).sub(n.target),B.applyQuaternion(vt),o.setFromVector3(B),n.autoRotate&&r===a.NONE&&E(V()),n.enableDamping?(o.theta+=h.theta*n.dampingFactor,o.phi+=h.phi*n.dampingFactor):(o.theta+=h.theta,o.phi+=h.phi);let $t=n.minAzimuthAngle,Qt=n.maxAzimuthAngle;return isFinite($t)&&isFinite(Qt)&&($t<-Math.PI?$t+=Ht:$t>Math.PI&&($t-=Ht),Qt<-Math.PI?Qt+=Ht:Qt>Math.PI&&(Qt-=Ht),$t<=Qt?o.theta=Math.max($t,Math.min(Qt,o.theta)):o.theta=o.theta>($t+Qt)/2?Math.max($t,o.theta):Math.min(Qt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=u,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),B.setFromSpherical(o),B.applyQuaternion(yt),zt.copy(n.target).add(B),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),c.set(0,0,0)),u=1,l||ct.distanceToSquared(n.object.position)>s||8*(1-Ot.dot(n.object.quaternion))>s||kt.distanceToSquared(n.target)>0?(n.dispatchEvent(Ha),ct.copy(n.object.position),Ot.copy(n.object.quaternion),kt.copy(n.target),l=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",P),n.domElement.removeEventListener("pointerdown",pt),n.domElement.removeEventListener("pointercancel",lt),n.domElement.removeEventListener("wheel",Vt),n.domElement.removeEventListener("pointermove",rt),n.domElement.removeEventListener("pointerup",lt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Mt),n._domElementKeyEvents=null)};const n=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=a.NONE;const s=1e-6,o=new Va,h=new Va;let u=1;const c=new at;let l=!1;const d=new re,p=new re,v=new re,g=new re,m=new re,f=new re,_=new re,x=new re,y=new re,M=[],C={};function V(){return 2*Math.PI/60/60*n.autoRotateSpeed}function N(){return Math.pow(.95,n.zoomSpeed)}function E(B){h.theta-=B}function S(B){h.phi-=B}const I=function(){const B=new at;return function(yt,ct){B.setFromMatrixColumn(ct,0),B.multiplyScalar(-yt),c.add(B)}}(),W=function(){const B=new at;return function(yt,ct){n.screenSpacePanning===!0?B.setFromMatrixColumn(ct,1):(B.setFromMatrixColumn(ct,0),B.crossVectors(n.object.up,B)),B.multiplyScalar(yt),c.add(B)}}(),D=function(){const B=new at;return function(yt,ct){const Ot=n.domElement;if(n.object.isPerspectiveCamera){const kt=n.object.position;B.copy(kt).sub(n.target);let Ht=B.length();Ht*=Math.tan(n.object.fov/2*Math.PI/180),I(2*yt*Ht/Ot.clientHeight,n.object.matrix),W(2*ct*Ht/Ot.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(yt*(n.object.right-n.object.left)/n.object.zoom/Ot.clientWidth,n.object.matrix),W(ct*(n.object.top-n.object.bottom)/n.object.zoom/Ot.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(B){n.object.isPerspectiveCamera?u/=B:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*B)),n.object.updateProjectionMatrix(),l=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(B){n.object.isPerspectiveCamera?u*=B:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/B)),n.object.updateProjectionMatrix(),l=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function st(B){d.set(B.clientX,B.clientY)}function F(B){_.set(B.clientX,B.clientY)}function U(B){g.set(B.clientX,B.clientY)}function Z(B){p.set(B.clientX,B.clientY),v.subVectors(p,d).multiplyScalar(n.rotateSpeed);const vt=n.domElement;E(2*Math.PI*v.x/vt.clientHeight),S(2*Math.PI*v.y/vt.clientHeight),d.copy(p),n.update()}function Y(B){x.set(B.clientX,B.clientY),y.subVectors(x,_),y.y>0?k(N()):y.y<0&&X(N()),_.copy(x),n.update()}function O(B){m.set(B.clientX,B.clientY),f.subVectors(m,g).multiplyScalar(n.panSpeed),D(f.x,f.y),g.copy(m),n.update()}function L(B){B.deltaY<0?X(N()):B.deltaY>0&&k(N()),n.update()}function R(B){let vt=!1;switch(B.code){case n.keys.UP:B.ctrlKey||B.metaKey||B.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),vt=!0;break;case n.keys.BOTTOM:B.ctrlKey||B.metaKey||B.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),vt=!0;break;case n.keys.LEFT:B.ctrlKey||B.metaKey||B.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),vt=!0;break;case n.keys.RIGHT:B.ctrlKey||B.metaKey||B.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),vt=!0;break}vt&&(B.preventDefault(),n.update())}function A(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{const B=.5*(M[0].pageX+M[1].pageX),vt=.5*(M[0].pageY+M[1].pageY);d.set(B,vt)}}function T(){if(M.length===1)g.set(M[0].pageX,M[0].pageY);else{const B=.5*(M[0].pageX+M[1].pageX),vt=.5*(M[0].pageY+M[1].pageY);g.set(B,vt)}}function H(){const B=M[0].pageX-M[1].pageX,vt=M[0].pageY-M[1].pageY,yt=Math.sqrt(B*B+vt*vt);_.set(0,yt)}function tt(){n.enableZoom&&H(),n.enablePan&&T()}function nt(){n.enableZoom&&H(),n.enableRotate&&A()}function K(B){if(M.length==1)p.set(B.pageX,B.pageY);else{const yt=mt(B),ct=.5*(B.pageX+yt.x),Ot=.5*(B.pageY+yt.y);p.set(ct,Ot)}v.subVectors(p,d).multiplyScalar(n.rotateSpeed);const vt=n.domElement;E(2*Math.PI*v.x/vt.clientHeight),S(2*Math.PI*v.y/vt.clientHeight),d.copy(p)}function ut(B){if(M.length===1)m.set(B.pageX,B.pageY);else{const vt=mt(B),yt=.5*(B.pageX+vt.x),ct=.5*(B.pageY+vt.y);m.set(yt,ct)}f.subVectors(m,g).multiplyScalar(n.panSpeed),D(f.x,f.y),g.copy(m)}function dt(B){const vt=mt(B),yt=B.pageX-vt.x,ct=B.pageY-vt.y,Ot=Math.sqrt(yt*yt+ct*ct);x.set(0,Ot),y.set(0,Math.pow(x.y/_.y,n.zoomSpeed)),k(y.y),_.copy(x)}function q(B){n.enableZoom&&dt(B),n.enablePan&&ut(B)}function bt(B){n.enableZoom&&dt(B),n.enableRotate&&K(B)}function pt(B){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(B.pointerId),n.domElement.addEventListener("pointermove",rt),n.domElement.addEventListener("pointerup",lt)),b(B),B.pointerType==="touch"?jt(B):qt(B))}function rt(B){n.enabled!==!1&&(B.pointerType==="touch"?Jt(B):Tt(B))}function lt(B){et(B),M.length===0&&(n.domElement.releasePointerCapture(B.pointerId),n.domElement.removeEventListener("pointermove",rt),n.domElement.removeEventListener("pointerup",lt)),n.dispatchEvent(Ga),r=a.NONE}function qt(B){let vt;switch(B.button){case 0:vt=n.mouseButtons.LEFT;break;case 1:vt=n.mouseButtons.MIDDLE;break;case 2:vt=n.mouseButtons.RIGHT;break;default:vt=-1}switch(vt){case jn.DOLLY:if(n.enableZoom===!1)return;F(B),r=a.DOLLY;break;case jn.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enablePan===!1)return;U(B),r=a.PAN}else{if(n.enableRotate===!1)return;st(B),r=a.ROTATE}break;case jn.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enableRotate===!1)return;st(B),r=a.ROTATE}else{if(n.enablePan===!1)return;U(B),r=a.PAN}break;default:r=a.NONE}r!==a.NONE&&n.dispatchEvent(Yr)}function Tt(B){switch(r){case a.ROTATE:if(n.enableRotate===!1)return;Z(B);break;case a.DOLLY:if(n.enableZoom===!1)return;Y(B);break;case a.PAN:if(n.enablePan===!1)return;O(B);break}}function Vt(B){n.enabled===!1||n.enableZoom===!1||r!==a.NONE||(B.preventDefault(),n.dispatchEvent(Yr),L(B),n.dispatchEvent(Ga))}function Mt(B){n.enabled===!1||n.enablePan===!1||R(B)}function jt(B){switch(gt(B),M.length){case 1:switch(n.touches.ONE){case Kn.ROTATE:if(n.enableRotate===!1)return;A(),r=a.TOUCH_ROTATE;break;case Kn.PAN:if(n.enablePan===!1)return;T(),r=a.TOUCH_PAN;break;default:r=a.NONE}break;case 2:switch(n.touches.TWO){case Kn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;tt(),r=a.TOUCH_DOLLY_PAN;break;case Kn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;nt(),r=a.TOUCH_DOLLY_ROTATE;break;default:r=a.NONE}break;default:r=a.NONE}r!==a.NONE&&n.dispatchEvent(Yr)}function Jt(B){switch(gt(B),r){case a.TOUCH_ROTATE:if(n.enableRotate===!1)return;K(B),n.update();break;case a.TOUCH_PAN:if(n.enablePan===!1)return;ut(B),n.update();break;case a.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;q(B),n.update();break;case a.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;bt(B),n.update();break;default:r=a.NONE}}function P(B){n.enabled!==!1&&B.preventDefault()}function b(B){M.push(B)}function et(B){delete C[B.pointerId];for(let vt=0;vt<M.length;vt++)if(M[vt].pointerId==B.pointerId){M.splice(vt,1);return}}function gt(B){let vt=C[B.pointerId];vt===void 0&&(vt=new re,C[B.pointerId]=vt),vt.set(B.pageX,B.pageY)}function mt(B){const vt=B.pointerId===M[0].pointerId?M[1]:M[0];return C[vt.pointerId]}n.domElement.addEventListener("contextmenu",P),n.domElement.addEventListener("pointerdown",pt),n.domElement.addEventListener("pointercancel",lt),n.domElement.addEventListener("wheel",Vt,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */class cn{constructor(t,e,n,a,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(a),this.$name=document.createElement("div"),this.$name.classList.add("name"),cn.nextNameID=cn.nextNameID||0,this.$name.id=`lil-gui-name-${++cn.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",s=>s.stopPropagation()),this.domElement.addEventListener("keyup",s=>s.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class $f extends cn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ss(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const jf={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:ss,toHexString:ss},Ui={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Kf={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=Ui.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const a=i*n<<16^t*n<<8^e*n<<0;return Ui.toHexString(a)}},Zf={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=Ui.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const a=i*n<<16^t*n<<8^e*n<<0;return Ui.toHexString(a)}},Jf=[jf,Ui,Kf,Zf];function Qf(i){return Jf.find(t=>t.match(i))}class tp extends cn{constructor(t,e,n,a){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Qf(this.initialValue),this._rgbScale=a,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=ss(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class $r extends cn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",a=>{a.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class ep extends cn{constructor(t,e,n,a,r,s){super(t,e,n,"number"),this._initInput(),this.min(a),this.max(r);const o=s!==void 0;this.step(o?s:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},n=_=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+_),this.$input.value=this.getValue())},a=_=>{_.key==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_)*-1))},r=_=>{this._inputFocused&&(_.preventDefault(),n(this._step*this._normalizeMouseWheel(_)))};let s=!1,o,h,u,c,l;const d=5,p=_=>{o=_.clientX,h=u=_.clientY,s=!0,c=this.getValue(),l=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",g)},v=_=>{if(s){const x=_.clientX-o,y=_.clientY-h;Math.abs(y)>d?(_.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&g()}if(!s){const x=_.clientY-u;l-=x*this._step*this._arrowKeyMultiplier(_),c+l>this._max?l=this._max-c:c+l<this._min&&(l=this._min-c),this._snapClampSetValue(c+l)}u=_.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",a),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(f,_,x,y,M)=>(f-_)/(x-_)*(M-y)+y,e=f=>{const _=this.$slider.getBoundingClientRect();let x=t(f,_.left,_.right,this._min,this._max);this._snapClampSetValue(x)},n=f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",a),window.addEventListener("mouseup",r)},a=f=>{e(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",r)};let s=!1,o,h;const u=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),s=!1},c=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,h=f.touches[0].clientY,s=!0):u(f),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",d))},l=f=>{if(s){const _=f.touches[0].clientX-o,x=f.touches[0].clientY-h;Math.abs(_)>Math.abs(x)?u(f):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",d))}else f.preventDefault(),e(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),v=400;let g;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const x=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(p,v)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",c,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class np extends cn{constructor(t,e,n,a){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(a)?a:Object.values(a),this._names=Array.isArray(a)?a:Object.keys(a),this._names.forEach(r=>{const s=document.createElement("option");s.innerHTML=r,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class ip extends cn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",a=>{a.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const rp=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function sp(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Wa=!1;class ms{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:a,title:r="Controls",closeFolders:s=!1,injectStyles:o=!0,touchStyles:h=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",u=>{(u.code==="Enter"||u.code==="Space")&&(u.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),h&&this.domElement.classList.add("allow-touch-styles"),!Wa&&o&&(sp(rp),Wa=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),a&&this.domElement.style.setProperty("--width",a+"px"),this._closeFolders=s}add(t,e,n,a,r){if(Object(n)===n)return new np(this,t,e,n);const s=t[e];switch(typeof s){case"number":return new ep(this,t,e,n,a,r);case"boolean":return new $f(this,t,e);case"string":return new ip(this,t,e);case"function":return new $r(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,s)}addColor(t,e,n=1){return new tp(this,t,e,n)}addFolder(t){const e=new ms({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof $r||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof $r)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const a=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=a+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}function ap(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function ar(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var To={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,a,r){function s(u,c){if(!a[u]){if(!n[u]){var l=typeof ar=="function"&&ar;if(!c&&l)return l(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+u+"'")}var d=a[u]={exports:{}};n[u][0].call(d.exports,function(p){var v=n[u][1][p];return s(v||p)},d,d.exports,e,n,a,r)}return a[u].exports}for(var o=typeof ar=="function"&&ar,h=0;h<r.length;h++)s(r[h]);return s}({1:[function(e,n,a){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,a){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,a){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=s;function s(u){u=u||{},this.lowerBound=new r,u.lowerBound&&this.lowerBound.copy(u.lowerBound),this.upperBound=new r,u.upperBound&&this.upperBound.copy(u.upperBound)}var o=new r;s.prototype.setFromPoints=function(u,c,l,d){var p=this.lowerBound,v=this.upperBound,g=l;p.copy(u[0]),g&&g.vmult(p,p),v.copy(p);for(var m=1;m<u.length;m++){var f=u[m];g&&(g.vmult(f,o),f=o),f.x>v.x&&(v.x=f.x),f.x<p.x&&(p.x=f.x),f.y>v.y&&(v.y=f.y),f.y<p.y&&(p.y=f.y),f.z>v.z&&(v.z=f.z),f.z<p.z&&(p.z=f.z)}return c&&(c.vadd(p,p),c.vadd(v,v)),d&&(p.x-=d,p.y-=d,p.z-=d,v.x+=d,v.y+=d,v.z+=d),this},s.prototype.copy=function(u){return this.lowerBound.copy(u.lowerBound),this.upperBound.copy(u.upperBound),this},s.prototype.clone=function(){return new s().copy(this)},s.prototype.extend=function(u){var c=u.lowerBound.x;this.lowerBound.x>c&&(this.lowerBound.x=c);var l=u.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var c=u.lowerBound.y;this.lowerBound.y>c&&(this.lowerBound.y=c);var l=u.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var c=u.lowerBound.z;this.lowerBound.z>c&&(this.lowerBound.z=c);var l=u.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},s.prototype.overlaps=function(u){var c=this.lowerBound,l=this.upperBound,d=u.lowerBound,p=u.upperBound;return(d.x<=l.x&&l.x<=p.x||c.x<=p.x&&p.x<=l.x)&&(d.y<=l.y&&l.y<=p.y||c.y<=p.y&&p.y<=l.y)&&(d.z<=l.z&&l.z<=p.z||c.z<=p.z&&p.z<=l.z)},s.prototype.contains=function(u){var c=this.lowerBound,l=this.upperBound,d=u.lowerBound,p=u.upperBound;return c.x<=d.x&&l.x>=p.x&&c.y<=d.y&&l.y>=p.y&&c.z<=d.z&&l.z>=p.z},s.prototype.getCorners=function(u,c,l,d,p,v,g,m){var f=this.lowerBound,_=this.upperBound;u.copy(f),c.set(_.x,f.y,f.z),l.set(_.x,_.y,f.z),d.set(f.x,_.y,_.z),p.set(_.x,f.y,f.z),v.set(f.x,_.y,f.z),g.set(f.x,f.y,_.z),m.copy(_)};var h=[new r,new r,new r,new r,new r,new r,new r,new r];s.prototype.toLocalFrame=function(u,c){var l=h,d=l[0],p=l[1],v=l[2],g=l[3],m=l[4],f=l[5],_=l[6],x=l[7];this.getCorners(d,p,v,g,m,f,_,x);for(var y=0;y!==8;y++){var M=l[y];u.pointToLocal(M,M)}return c.setFromPoints(l)},s.prototype.toWorldFrame=function(u,c){var l=h,d=l[0],p=l[1],v=l[2],g=l[3],m=l[4],f=l[5],_=l[6],x=l[7];this.getCorners(d,p,v,g,m,f,_,x);for(var y=0;y!==8;y++){var M=l[y];u.pointToWorld(M,M)}return c.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,a){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(s,o){if(s=s.index,o=o.index,o>s){var h=o;o=s,s=h}return this.matrix[(s*(s+1)>>1)+o-1]},r.prototype.set=function(s,o,h){if(s=s.index,o=o.index,o>s){var u=o;o=s,s=u}this.matrix[(s*(s+1)>>1)+o-1]=h?1:0},r.prototype.reset=function(){for(var s=0,o=this.matrix.length;s!==o;s++)this.matrix[s]=0},r.prototype.setNumObjects=function(s){this.matrix.length=s*(s-1)>>1}},{}],5:[function(e,n,a){var r=e("../objects/Body"),s=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=h;function h(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}h.prototype.collisionPairs=function(g,m,f){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var u=r.STATIC|r.KINEMATIC;h.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&u||g.sleepState===r.SLEEPING)&&(m.type&u||m.sleepState===r.SLEEPING))},h.prototype.intersectionTest=function(g,m,f,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,f,_):this.doBoundingSphereBroadphase(g,m,f,_)};var c=new s;new s,new o,new s,h.prototype.doBoundingSphereBroadphase=function(g,m,f,_){var x=c;m.position.vsub(g.position,x);var y=Math.pow(g.boundingRadius+m.boundingRadius,2),M=x.norm2();M<y&&(f.push(g),_.push(m))},h.prototype.doBoundingBoxBroadphase=function(g,m,f,_){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(f.push(g),_.push(m))};var l={keys:[]},d=[],p=[];h.prototype.makePairsUnique=function(g,m){for(var f=l,_=d,x=p,y=g.length,M=0;M!==y;M++)_[M]=g[M],x[M]=m[M];g.length=0,m.length=0;for(var M=0;M!==y;M++){var C=_[M].id,V=x[M].id,N=C<V?C+","+V:V+","+C;f[N]=M,f.keys.push(N)}for(var M=0;M!==f.keys.length;M++){var N=f.keys.pop(),E=f[N];g.push(_[E]),m.push(x[E]),delete f[N]}},h.prototype.setWorld=function(g){};var v=new s;h.boundingSphereCheck=function(g,m){var f=v;return g.position.vsub(m.position,f),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>f.norm2()},h.prototype.aabbQuery=function(g,m,f){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,a){n.exports=h;var r=e("./Broadphase"),s=e("../math/Vec3"),o=e("../shapes/Shape");function h(c,l,d,p,v){r.apply(this),this.nx=d||10,this.ny=p||10,this.nz=v||10,this.aabbMin=c||new s(100,100,100),this.aabbMax=l||new s(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}h.prototype=new r,h.prototype.constructor=h;var u=new s;new s,h.prototype.collisionPairs=function(c,l,d){var p=c.numObjects(),v=c.bodies,tt=this.aabbMax,H=this.aabbMin,g=this.nx,m=this.ny,f=this.nz,_=m*f,x=f,y=1,M=tt.x,C=tt.y,V=tt.z,N=H.x,E=H.y,S=H.z,I=g/(M-N),W=m/(C-E),D=f/(V-S),k=(M-N)/g,X=(C-E)/m,st=(V-S)/f,F=Math.sqrt(k*k+X*X+st*st)*.5,U=o.types,Z=U.SPHERE,Y=U.PLANE;U.BOX,U.COMPOUND,U.CONVEXPOLYHEDRON;for(var O=this.bins,L=this.binLengths,R=this.bins.length,A=0;A!==R;A++)L[A]=0;var T=Math.ceil,H=Math.min,tt=Math.max;function nt(yt,ct,Ot,kt,Ht,Gt,zt){var $t=(yt-N)*I|0,Qt=(ct-E)*W|0,$=(Ot-S)*D|0,Pt=T((kt-N)*I),ot=T((Ht-E)*W),Et=T((Gt-S)*D);$t<0?$t=0:$t>=g&&($t=g-1),Qt<0?Qt=0:Qt>=m&&(Qt=m-1),$<0?$=0:$>=f&&($=f-1),Pt<0?Pt=0:Pt>=g&&(Pt=g-1),ot<0?ot=0:ot>=m&&(ot=m-1),Et<0?Et=0:Et>=f&&(Et=f-1),$t*=_,Qt*=x,$*=y,Pt*=_,ot*=x,Et*=y;for(var Dt=$t;Dt<=Pt;Dt+=_)for(var ie=Qt;ie<=ot;ie+=x)for(var he=$;he<=Et;he+=y){var fe=Dt+ie+he;O[fe][L[fe]++]=zt}}for(var A=0;A!==p;A++){var K=v[A],ut=K.shape;switch(ut.type){case Z:var dt=K.position.x,q=K.position.y,bt=K.position.z,pt=ut.radius;nt(dt-pt,q-pt,bt-pt,dt+pt,q+pt,bt+pt,K);break;case Y:ut.worldNormalNeedsUpdate&&ut.computeWorldNormal(K.quaternion);var rt=ut.worldNormal,lt=N+k*.5-K.position.x,qt=E+X*.5-K.position.y,Tt=S+st*.5-K.position.z,Vt=u;Vt.set(lt,qt,Tt);for(var Mt=0,jt=0;Mt!==g;Mt++,jt+=_,Vt.y=qt,Vt.x+=k)for(var Jt=0,P=0;Jt!==m;Jt++,P+=x,Vt.z=Tt,Vt.y+=X)for(var b=0,et=0;b!==f;b++,et+=y,Vt.z+=st)if(Vt.dot(rt)<F){var gt=jt+P+et;O[gt][L[gt]++]=K}break;default:K.aabbNeedsUpdate&&K.computeAABB(),nt(K.aabb.lowerBound.x,K.aabb.lowerBound.y,K.aabb.lowerBound.z,K.aabb.upperBound.x,K.aabb.upperBound.y,K.aabb.upperBound.z,K);break}}for(var A=0;A!==R;A++){var mt=L[A];if(mt>1)for(var B=O[A],Mt=0;Mt!==mt;Mt++)for(var K=B[Mt],Jt=0;Jt!==Mt;Jt++){var vt=B[Jt];this.needBroadphaseCollision(K,vt)&&this.intersectionTest(K,vt,l,d)}}this.makePairsUnique(l,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,a){n.exports=o;var r=e("./Broadphase"),s=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(h,u,c){var l=h.bodies,d=l.length,p,v,g,m;for(p=0;p!==d;p++)for(v=0;v!==p;v++)g=l[p],m=l[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,u,c)},new s,o.prototype.aabbQuery=function(h,u,c){c=c||[];for(var l=0;l<h.bodies.length;l++){var d=h.bodies[l];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(u)&&c.push(d)}return c}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,a){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(s,o){if(s=s.id,o=o.id,o>s){var h=o;o=s,s=h}return s+"-"+o in this.matrix},r.prototype.set=function(s,o,h){if(s=s.id,o=o.id,o>s){var u=o;o=s,s=u}h?this.matrix[s+"-"+o]=!0:delete this.matrix[s+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(s){}},{}],9:[function(e,n,a){n.exports=l;var r=e("../math/Vec3"),s=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var h=e("../collision/RaycastResult"),u=e("../shapes/Shape"),c=e("../collision/AABB");function l(R,A){this.from=R?R.clone():new r,this.to=A?A.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new h,this.hasHit=!1,this.callback=function(T){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var d=new c,p=[];l.prototype.intersectWorld=function(R,A){return this.mode=A.mode||l.ANY,this.result=A.result||new h,this.skipBackfaces=!!A.skipBackfaces,this.collisionFilterMask=typeof A.collisionFilterMask<"u"?A.collisionFilterMask:-1,this.collisionFilterGroup=typeof A.collisionFilterGroup<"u"?A.collisionFilterGroup:-1,A.from&&this.from.copy(A.from),A.to&&this.to.copy(A.to),this.callback=A.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),p.length=0,R.broadphase.aabbQuery(R,d,p),this.intersectBodies(p),this.hasHit};var v=new r,g=new r;l.pointInTriangle=m;function m(R,A,T,H){H.vsub(A,Y),T.vsub(A,v),R.vsub(A,g);var tt=Y.dot(Y),nt=Y.dot(v),K=Y.dot(g),ut=v.dot(v),dt=v.dot(g),q,bt;return(q=ut*K-nt*dt)>=0&&(bt=tt*dt-nt*K)>=0&&q+bt<tt*ut-nt*nt}var f=new r,_=new s;l.prototype.intersectBody=function(R,A){A&&(this.result=A,this._updateDirection());var T=this.checkCollisionResponse;if(!(T&&!R.collisionResponse)&&!(!(this.collisionFilterGroup&R.collisionFilterMask)||!(R.collisionFilterGroup&this.collisionFilterMask)))for(var H=f,tt=_,nt=0,K=R.shapes.length;nt<K;nt++){var ut=R.shapes[nt];if(!(T&&!ut.collisionResponse)&&(R.quaternion.mult(R.shapeOrientations[nt],tt),R.quaternion.vmult(R.shapeOffsets[nt],H),H.vadd(R.position,H),this.intersectShape(ut,tt,H,R),this.result._shouldStop))break}},l.prototype.intersectBodies=function(R,A){A&&(this.result=A,this._updateDirection());for(var T=0,H=R.length;!this.result._shouldStop&&T<H;T++)this.intersectBody(R[T])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(R,A,T,H){var tt=this.from,nt=L(tt,this._direction,T);if(!(nt>R.boundingSphereRadius)){var K=this[R.type];K&&K.call(this,R,A,T,H)}},new r,new r;var x=new r,y=new r,M=new r,C=new r;new r,new h,l.prototype.intersectBox=function(R,A,T,H){return this.intersectConvex(R.convexPolyhedronRepresentation,A,T,H)},l.prototype[u.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(R,A,T,H){var tt=this.from,nt=this.to,K=this._direction,ut=new r(0,0,1);A.vmult(ut,ut);var dt=new r;tt.vsub(T,dt);var q=dt.dot(ut);nt.vsub(T,dt);var bt=dt.dot(ut);if(!(q*bt>0)&&!(tt.distanceTo(nt)<q)){var pt=ut.dot(K);if(!(Math.abs(pt)<this.precision)){var rt=new r,lt=new r,qt=new r;tt.vsub(T,rt);var Tt=-ut.dot(rt)/pt;K.scale(Tt,lt),tt.vadd(lt,qt),this.reportIntersection(ut,qt,R,H,-1)}}},l.prototype[u.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(R){var A=this.to,T=this.from;R.lowerBound.x=Math.min(A.x,T.x),R.lowerBound.y=Math.min(A.y,T.y),R.lowerBound.z=Math.min(A.z,T.z),R.upperBound.x=Math.max(A.x,T.x),R.upperBound.y=Math.max(A.y,T.y),R.upperBound.z=Math.max(A.z,T.z)};var V={faceList:[0]};l.prototype.intersectHeightfield=function(R,A,T,H){R.data,R.elementSize;var tt=new r,nt=new l(this.from,this.to);o.pointToLocalFrame(T,A,nt.from,nt.from),o.pointToLocalFrame(T,A,nt.to,nt.to);var K=[],ut=null,dt=null,q=null,bt=null,pt=R.getIndexOfPosition(nt.from.x,nt.from.y,K,!1);if(pt&&(ut=K[0],dt=K[1],q=K[0],bt=K[1]),pt=R.getIndexOfPosition(nt.to.x,nt.to.y,K,!1),pt&&((ut===null||K[0]<ut)&&(ut=K[0]),(q===null||K[0]>q)&&(q=K[0]),(dt===null||K[1]<dt)&&(dt=K[1]),(bt===null||K[1]>bt)&&(bt=K[1])),ut!==null){var rt=[];R.getRectMinMax(ut,dt,q,bt,rt),rt[0],rt[1];for(var lt=ut;lt<=q;lt++)for(var qt=dt;qt<=bt;qt++){if(this.result._shouldStop||(R.getConvexTrianglePillar(lt,qt,!1),o.pointToWorldFrame(T,A,R.pillarOffset,tt),this.intersectConvex(R.pillarConvex,A,tt,H,V),this.result._shouldStop))return;R.getConvexTrianglePillar(lt,qt,!0),o.pointToWorldFrame(T,A,R.pillarOffset,tt),this.intersectConvex(R.pillarConvex,A,tt,H,V)}}},l.prototype[u.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var N=new r,E=new r;l.prototype.intersectSphere=function(R,A,T,H){var tt=this.from,nt=this.to,K=R.radius,ut=Math.pow(nt.x-tt.x,2)+Math.pow(nt.y-tt.y,2)+Math.pow(nt.z-tt.z,2),dt=2*((nt.x-tt.x)*(tt.x-T.x)+(nt.y-tt.y)*(tt.y-T.y)+(nt.z-tt.z)*(tt.z-T.z)),q=Math.pow(tt.x-T.x,2)+Math.pow(tt.y-T.y,2)+Math.pow(tt.z-T.z,2)-Math.pow(K,2),bt=Math.pow(dt,2)-4*ut*q,pt=N,rt=E;if(!(bt<0))if(bt===0)tt.lerp(nt,bt,pt),pt.vsub(T,rt),rt.normalize(),this.reportIntersection(rt,pt,R,H,-1);else{var lt=(-dt-Math.sqrt(bt))/(2*ut),qt=(-dt+Math.sqrt(bt))/(2*ut);if(lt>=0&&lt<=1&&(tt.lerp(nt,lt,pt),pt.vsub(T,rt),rt.normalize(),this.reportIntersection(rt,pt,R,H,-1)),this.result._shouldStop)return;qt>=0&&qt<=1&&(tt.lerp(nt,qt,pt),pt.vsub(T,rt),rt.normalize(),this.reportIntersection(rt,pt,R,H,-1))}},l.prototype[u.types.SPHERE]=l.prototype.intersectSphere;var S=new r;new r,new r;var I=new r;l.prototype.intersectConvex=function(A,T,H,tt,nt){for(var K=S,ut=I,dt=nt&&nt.faceList||null,q=A.faces,bt=A.vertices,pt=A.faceNormals,rt=this._direction,lt=this.from,qt=this.to,Tt=lt.distanceTo(qt),Vt=dt?dt.length:q.length,Mt=this.result,jt=0;!Mt._shouldStop&&jt<Vt;jt++){var Jt=dt?dt[jt]:jt,P=q[Jt],b=pt[Jt],et=T,gt=H;ut.copy(bt[P[0]]),et.vmult(ut,ut),ut.vadd(gt,ut),ut.vsub(lt,ut),et.vmult(b,K);var mt=rt.dot(K);if(!(Math.abs(mt)<this.precision)){var B=K.dot(ut)/mt;if(!(B<0)){rt.mult(B,x),x.vadd(lt,x),y.copy(bt[P[0]]),et.vmult(y,y),gt.vadd(y,y);for(var vt=1;!Mt._shouldStop&&vt<P.length-1;vt++){M.copy(bt[P[vt]]),C.copy(bt[P[vt+1]]),et.vmult(M,M),et.vmult(C,C),gt.vadd(M,M),gt.vadd(C,C);var yt=x.distanceTo(lt);!(m(x,y,M,C)||m(x,M,y,C))||yt>Tt||this.reportIntersection(K,x,A,tt,Jt)}}}}},l.prototype[u.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var W=new r,D=new r,k=new r,X=new r,st=new r,F=new r;new c;var U=[],Z=new o;l.prototype.intersectTrimesh=function(A,T,H,tt,nt){var K=W,ut=U,dt=Z,q=I,bt=D,pt=k,rt=X,lt=F,qt=st;nt&&nt.faceList;var Tt=A.indices;A.vertices,A.faceNormals;var Vt=this.from,Mt=this.to,jt=this._direction;dt.position.copy(H),dt.quaternion.copy(T),o.vectorToLocalFrame(H,T,jt,bt),o.pointToLocalFrame(H,T,Vt,pt),o.pointToLocalFrame(H,T,Mt,rt);var Jt=pt.distanceSquared(rt);A.tree.rayQuery(this,dt,ut);for(var P=0,b=ut.length;!this.result._shouldStop&&P!==b;P++){var et=ut[P];A.getNormal(et,K),A.getVertex(Tt[et*3],y),y.vsub(pt,q);var gt=bt.dot(K),mt=K.dot(q)/gt;if(!(mt<0)){bt.scale(mt,x),x.vadd(pt,x),A.getVertex(Tt[et*3+1],M),A.getVertex(Tt[et*3+2],C);var B=x.distanceSquared(pt);!(m(x,M,y,C)||m(x,y,M,C))||B>Jt||(o.vectorToWorldFrame(T,K,qt),o.pointToWorldFrame(H,T,x,lt),this.reportIntersection(qt,lt,A,tt,et))}}ut.length=0},l.prototype[u.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(R,A,T,H,tt){var nt=this.from,K=this.to,ut=nt.distanceTo(A),dt=this.result;if(!(this.skipBackfaces&&R.dot(this._direction)>0))switch(dt.hitFaceIndex=typeof tt<"u"?tt:-1,this.mode){case l.ALL:this.hasHit=!0,dt.set(nt,K,R,A,T,H,ut),dt.hasHit=!0,this.callback(dt);break;case l.CLOSEST:(ut<dt.distance||!dt.hasHit)&&(this.hasHit=!0,dt.hasHit=!0,dt.set(nt,K,R,A,T,H,ut));break;case l.ANY:this.hasHit=!0,dt.hasHit=!0,dt.set(nt,K,R,A,T,H,ut),dt._shouldStop=!0;break}};var Y=new r,O=new r;function L(R,A,T){T.vsub(R,Y);var H=Y.dot(A);A.mult(H,O),O.vadd(R,O);var tt=T.distanceTo(O);return tt}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,a){var r=e("../math/Vec3");n.exports=s;function s(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}s.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},s.prototype.abort=function(){this._shouldStop=!0},s.prototype.set=function(o,h,u,c,l,d,p){this.rayFromWorld.copy(o),this.rayToWorld.copy(h),this.hitNormalWorld.copy(u),this.hitPointWorld.copy(c),this.shape=l,this.body=d,this.distance=p}},{"../math/Vec3":30}],11:[function(e,n,a){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=s;function s(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var h=this.axisList;this._addBodyHandler=function(u){h.push(u.body)},this._removeBodyHandler=function(u){var c=h.indexOf(u.body);c!==-1&&h.splice(c,1)},o&&this.setWorld(o)}s.prototype=new r,s.prototype.setWorld=function(o){this.axisList.length=0;for(var h=0;h<o.bodies.length;h++)this.axisList.push(o.bodies[h]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},s.insertionSortX=function(o){for(var h=1,u=o.length;h<u;h++){for(var c=o[h],l=h-1;l>=0&&!(o[l].aabb.lowerBound.x<=c.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=c}return o},s.insertionSortY=function(o){for(var h=1,u=o.length;h<u;h++){for(var c=o[h],l=h-1;l>=0&&!(o[l].aabb.lowerBound.y<=c.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=c}return o},s.insertionSortZ=function(o){for(var h=1,u=o.length;h<u;h++){for(var c=o[h],l=h-1;l>=0&&!(o[l].aabb.lowerBound.z<=c.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=c}return o},s.prototype.collisionPairs=function(o,h,u){var c=this.axisList,l=c.length,d=this.axisIndex,p,v;for(this.dirty&&(this.sortList(),this.dirty=!1),p=0;p!==l;p++){var g=c[p];for(v=p+1;v<l;v++){var m=c[v];if(this.needBroadphaseCollision(g,m)){if(!s.checkBounds(g,m,d))break;this.intersectionTest(g,m,h,u)}}}},s.prototype.sortList=function(){for(var o=this.axisList,h=this.axisIndex,u=o.length,c=0;c!==u;c++){var l=o[c];l.aabbNeedsUpdate&&l.computeAABB()}h===0?s.insertionSortX(o):h===1?s.insertionSortY(o):h===2&&s.insertionSortZ(o)},s.checkBounds=function(o,h,u){var c,l;u===0?(c=o.position.x,l=h.position.x):u===1?(c=o.position.y,l=h.position.y):u===2&&(c=o.position.z,l=h.position.z);var d=o.boundingRadius,p=h.boundingRadius,v=c+d,g=l-p;return g<v},s.prototype.autoDetectAxis=function(){for(var o=0,h=0,u=0,c=0,l=0,d=0,p=this.axisList,v=p.length,g=1/v,m=0;m!==v;m++){var f=p[m],_=f.position.x;o+=_,h+=_*_;var x=f.position.y;u+=x,c+=x*x;var y=f.position.z;l+=y,d+=y*y}var M=h-o*o*g,C=c-u*u*g,V=d-l*l*g;M>C?M>V?this.axisIndex=0:this.axisIndex=2:C>V?this.axisIndex=1:this.axisIndex=2},s.prototype.aabbQuery=function(o,h,u){u=u||[],this.dirty&&(this.sortList(),this.dirty=!1);var c=this.axisIndex,l="x";c===1&&(l="y"),c===2&&(l="z");var d=this.axisList;h.lowerBound[l],h.upperBound[l];for(var p=0;p<d.length;p++){var v=d[p];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(h)&&u.push(v)}return u}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,a){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var h=e("../math/Vec3");function u(c,l,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new h,g=d.pivotB?d.pivotB.clone():new h;this.axisA=d.axisA?d.axisA.clone():new h,this.axisB=d.axisB?d.axisB.clone():new h,r.call(this,c,v,l,g,p),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var m=this.coneEquation=new s(c,l,d),f=this.twistEquation=new o(c,l,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,m.maxForce=0,m.minForce=-p,f.maxForce=0,f.minForce=-p,this.equations.push(m,f)}u.prototype=new r,u.constructor=u,new h,new h,u.prototype.update=function(){var c=this.bodyA,l=this.bodyB,d=this.coneEquation,p=this.twistEquation;r.prototype.update.call(this),c.vectorToWorldFrame(this.axisA,d.axisA),l.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(p.axisA,p.axisA),c.vectorToWorldFrame(p.axisA,p.axisA),this.axisB.tangents(p.axisB,p.axisB),l.vectorToWorldFrame(p.axisB,p.axisB),d.angle=this.angle,p.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,a){n.exports=s;var r=e("../utils/Utils");function s(o,h,u){u=r.defaults(u,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=h,this.id=s.idCounter++,this.collideConnected=u.collideConnected,u.wakeUpBodies&&(o&&o.wakeUp(),h&&h.wakeUp())}s.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},s.prototype.enable=function(){for(var o=this.equations,h=0;h<o.length;h++)o[h].enabled=!0},s.prototype.disable=function(){for(var o=this.equations,h=0;h<o.length;h++)o[h].enabled=!1},s.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,a){n.exports=o;var r=e("./Constraint"),s=e("../equations/ContactEquation");function o(h,u,c,l){r.call(this,h,u),typeof c>"u"&&(c=h.position.distanceTo(u.position)),typeof l>"u"&&(l=1e6),this.distance=c;var d=this.distanceEquation=new s(h,u);this.equations.push(d),d.minForce=-l,d.maxForce=l}o.prototype=new r,o.prototype.update=function(){var h=this.bodyA,u=this.bodyB,c=this.distanceEquation,l=this.distance*.5,d=c.ni;u.position.vsub(h.position,d),d.normalize(),d.mult(l,c.ri),d.mult(-l,c.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,a){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var h=e("../math/Vec3");function u(d,p,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new h,f=v.pivotB?v.pivotB.clone():new h;r.call(this,d,m,p,f,g);var _=this.axisA=v.axisA?v.axisA.clone():new h(1,0,0);_.normalize();var x=this.axisB=v.axisB?v.axisB.clone():new h(1,0,0);x.normalize();var y=this.rotationalEquation1=new s(d,p,v),M=this.rotationalEquation2=new s(d,p,v),C=this.motorEquation=new o(d,p,g);C.enabled=!1,this.equations.push(y,M,C)}u.prototype=new r,u.constructor=u,u.prototype.enableMotor=function(){this.motorEquation.enabled=!0},u.prototype.disableMotor=function(){this.motorEquation.enabled=!1},u.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},u.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var c=new h,l=new h;u.prototype.update=function(){var d=this.bodyA,p=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,f=c,_=l,x=this.axisA,y=this.axisB;r.prototype.update.call(this),d.quaternion.vmult(x,f),p.quaternion.vmult(y,_),f.tangents(g.axisA,m.axisA),g.axisB.copy(_),m.axisB.copy(_),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),p.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,a){n.exports=h,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function h(u,c,l){l=l||{};var d=typeof l.maxForce<"u"?l.maxForce:1e6,p=new o,v=new o,g=new o;u.position.vadd(c.position,g),g.scale(.5,g),c.pointToLocalFrame(g,v),u.pointToLocalFrame(g,p),r.call(this,u,p,c,v,d);var m=this.rotationalEquation1=new s(u,c,l),f=this.rotationalEquation2=new s(u,c,l),_=this.rotationalEquation3=new s(u,c,l);this.equations.push(m,f,_)}h.prototype=new r,h.constructor=h,new o,new o,h.prototype.update=function(){var u=this.bodyA,c=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,d=this.rotationalEquation2,p=this.rotationalEquation3;r.prototype.update.call(this),u.vectorToWorldFrame(o.UNIT_X,l.axisA),c.vectorToWorldFrame(o.UNIT_Y,l.axisB),u.vectorToWorldFrame(o.UNIT_Y,d.axisA),c.vectorToWorldFrame(o.UNIT_Z,d.axisB),u.vectorToWorldFrame(o.UNIT_Z,p.axisA),c.vectorToWorldFrame(o.UNIT_X,p.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,a){n.exports=h;var r=e("./Constraint"),s=e("../equations/ContactEquation"),o=e("../math/Vec3");function h(u,c,l,d,p){r.call(this,u,l),p=typeof p<"u"?p:1e6,this.pivotA=c?c.clone():new o,this.pivotB=d?d.clone():new o;var v=this.equationX=new s(u,l),g=this.equationY=new s(u,l),m=this.equationZ=new s(u,l);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-p,v.maxForce=g.maxForce=m.maxForce=p,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}h.prototype=new r,h.prototype.update=function(){var u=this.bodyA,c=this.bodyB,l=this.equationX,d=this.equationY,p=this.equationZ;u.quaternion.vmult(this.pivotA,l.ri),c.quaternion.vmult(this.pivotB,l.rj),d.ri.copy(l.ri),d.rj.copy(l.rj),p.ri.copy(l.ri),p.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(c,l,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,c,l,-p,p),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}o.prototype=new s,o.prototype.constructor=o;var h=new r,u=new r;o.prototype.computeB=function(c){var l=this.a,d=this.b,p=this.axisA,v=this.axisB,g=h,m=u,f=this.jacobianElementA,_=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),_.rotational.copy(g);var x=Math.cos(this.angle)-p.dot(v),y=this.computeGW(),M=this.computeGiMf(),C=-x*l-y*d-c*M;return C}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,a){n.exports=o;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function o(m,f,_){_=typeof _<"u"?_:1e6,r.call(this,m,f,0,_),this.restitution=0,this.ri=new s,this.rj=new s,this.ni=new s}o.prototype=new r,o.prototype.constructor=o;var h=new s,u=new s,c=new s;o.prototype.computeB=function(m){var f=this.a,_=this.b,x=this.bi,y=this.bj,M=this.ri,C=this.rj,V=h,N=u,E=x.velocity,S=x.angularVelocity;x.force,x.torque;var I=y.velocity,W=y.angularVelocity;y.force,y.torque;var D=c,k=this.jacobianElementA,X=this.jacobianElementB,st=this.ni;M.cross(st,V),C.cross(st,N),st.negate(k.spatial),V.negate(k.rotational),X.spatial.copy(st),X.rotational.copy(N),D.copy(y.position),D.vadd(C,D),D.vsub(x.position,D),D.vsub(M,D);var F=st.dot(D),U=this.restitution+1,Z=U*I.dot(st)-U*E.dot(st)+W.dot(N)-S.dot(V),Y=this.computeGiMf(),O=-F*f-Z*_-m*Y;return O};var l=new s,d=new s,p=new s,v=new s,g=new s;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,f=d,_=p,x=v,y=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,x),this.bi.getVelocityAtWorldPoint(_,m),this.bj.getVelocityAtWorldPoint(x,f),m.vsub(f,y),this.ni.dot(y)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,a){n.exports=o;var r=e("../math/JacobianElement"),s=e("../math/Vec3");function o(g,m,f,_){this.id=o.id++,this.minForce=typeof f>"u"?-1e6:f,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,f){var _=m,x=g,y=f;this.a=4/(y*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(y*y*x*(1+4*_))},o.prototype.computeB=function(g,m,f){var _=this.computeGW(),x=this.computeGq(),y=this.computeGiMf();return-x*g-_*m-y*f},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.position,y=_.position;return g.spatial.dot(x)+m.spatial.dot(y)};var h=new s;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.velocity,y=_.velocity,M=f.angularVelocity||h,C=_.angularVelocity||h;return g.multiplyVectors(x,M)+m.multiplyVectors(y,C)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.vlambda,y=_.vlambda,M=f.wlambda||h,C=_.wlambda||h;return g.multiplyVectors(x,M)+m.multiplyVectors(y,C)};var u=new s,c=new s,l=new s,d=new s;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.force,y=f.torque,M=_.force,C=_.torque,V=f.invMassSolve,N=_.invMassSolve;return f.invInertiaWorldSolve?f.invInertiaWorldSolve.vmult(y,l):l.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(C,d):d.set(0,0,0),x.mult(V,u),M.mult(N,c),g.multiplyVectors(u,l)+m.multiplyVectors(c,d)};var p=new s;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.invMassSolve,y=_.invMassSolve,M=f.invInertiaWorldSolve,C=_.invInertiaWorldSolve,V=x+y;return M&&(M.vmult(g.rotational,p),V+=p.dot(g.rotational)),C&&(C.vmult(m.rotational,p),V+=p.dot(m.rotational)),V};var v=new s;new s,new s,new s,new s,new s,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,f=this.jacobianElementB,_=this.bi,x=this.bj,y=v;m.spatial.mult(_.invMassSolve*g,y),_.vlambda.vadd(y,_.vlambda),f.spatial.mult(x.invMassSolve*g,y),x.vlambda.vadd(y,x.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,y),y.mult(g,y),_.wlambda.vadd(y,_.wlambda)),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(f.rotational,y),y.mult(g,y),x.wlambda.vadd(y,x.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,a){n.exports=o;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function o(c,l,d){r.call(this,c,l,-d,d),this.ri=new s,this.rj=new s,this.t=new s}o.prototype=new r,o.prototype.constructor=o;var h=new s,u=new s;o.prototype.computeB=function(c){this.a;var l=this.b;this.bi,this.bj;var d=this.ri,p=this.rj,v=h,g=u,m=this.t;d.cross(m,v),p.cross(m,g);var f=this.jacobianElementA,_=this.jacobianElementB;m.negate(f.spatial),v.negate(f.rotational),_.spatial.copy(m),_.rotational.copy(g);var x=this.computeGW(),y=this.computeGiMf(),M=-x*l-c*y;return M}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(c,l,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,c,l,-p,p),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new s,o.prototype.constructor=o;var h=new r,u=new r;o.prototype.computeB=function(c){var l=this.a,d=this.b,p=this.axisA,v=this.axisB,g=h,m=u,f=this.jacobianElementA,_=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),_.rotational.copy(g);var x=Math.cos(this.maxAngle)-p.dot(v),y=this.computeGW(),M=this.computeGiMf(),C=-x*l-y*d-c*M;return C}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(h,u,c){c=typeof c<"u"?c:1e6,s.call(this,h,u,-c,c),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new s,o.prototype.constructor=o,o.prototype.computeB=function(h){this.a;var u=this.b;this.bi,this.bj;var c=this.axisA,l=this.axisB,d=this.jacobianElementA,p=this.jacobianElementB;d.rotational.copy(c),l.negate(p.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*u-h*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,a){var r=e("../utils/Utils");n.exports=s;function s(o,h,u){u=r.defaults(u,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[o,h],this.friction=u.friction,this.restitution=u.restitution,this.contactEquationStiffness=u.contactEquationStiffness,this.contactEquationRelaxation=u.contactEquationRelaxation,this.frictionEquationStiffness=u.frictionEquationStiffness,this.frictionEquationRelaxation=u.frictionEquationRelaxation}s.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,a){n.exports=r;function r(s){var o="";s=s||{},typeof s=="string"?(o=s,s={}):typeof s=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof s.friction<"u"?s.friction:-1,this.restitution=typeof s.restitution<"u"?s.restitution:-1}r.idCounter=0},{}],26:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(){this.spatial=new r,this.rotational=new r}s.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},s.prototype.multiplyVectors=function(o,h){return o.dot(this.spatial)+h.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}s.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},s.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},s.prototype.setTrace=function(o){var h=this.elements;h[0]=o.x,h[4]=o.y,h[8]=o.z},s.prototype.getTrace=function(h){var h=h||new r,u=this.elements;h.x=u[0],h.y=u[4],h.z=u[8]},s.prototype.vmult=function(o,h){h=h||new r;var u=this.elements,c=o.x,l=o.y,d=o.z;return h.x=u[0]*c+u[1]*l+u[2]*d,h.y=u[3]*c+u[4]*l+u[5]*d,h.z=u[6]*c+u[7]*l+u[8]*d,h},s.prototype.smult=function(o){for(var h=0;h<this.elements.length;h++)this.elements[h]*=o},s.prototype.mmult=function(o,h){for(var u=h||new s,c=0;c<3;c++)for(var l=0;l<3;l++){for(var d=0,p=0;p<3;p++)d+=o.elements[c+p*3]*this.elements[p+l*3];u.elements[c+l*3]=d}return u},s.prototype.scale=function(o,h){h=h||new s;for(var u=this.elements,c=h.elements,l=0;l!==3;l++)c[3*l+0]=o.x*u[3*l+0],c[3*l+1]=o.y*u[3*l+1],c[3*l+2]=o.z*u[3*l+2];return h},s.prototype.solve=function(o,h){h=h||new r;for(var u=3,c=4,l=[],d=0;d<u*c;d++)l.push(0);var d,p;for(d=0;d<3;d++)for(p=0;p<3;p++)l[d+c*p]=this.elements[d+3*p];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var v=3,g=v,m,f=4,_;do{if(d=g-v,l[d+c*d]===0){for(p=d+1;p<g;p++)if(l[d+c*p]!==0){m=f;do _=f-m,l[_+c*d]+=l[_+c*p];while(--m);break}}if(l[d+c*d]!==0)for(p=d+1;p<g;p++){var x=l[d+c*p]/l[d+c*d];m=f;do _=f-m,l[_+c*p]=_<=d?0:l[_+c*p]-l[_+c*d]*x;while(--m)}}while(--v);if(h.z=l[2*c+3]/l[2*c+2],h.y=(l[1*c+3]-l[1*c+2]*h.z)/l[1*c+1],h.x=(l[0*c+3]-l[0*c+2]*h.z-l[0*c+1]*h.y)/l[0*c+0],isNaN(h.x)||isNaN(h.y)||isNaN(h.z)||h.x===1/0||h.y===1/0||h.z===1/0)throw"Could not solve equation! Got x=["+h.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return h},s.prototype.e=function(o,h,u){if(u===void 0)return this.elements[h+3*o];this.elements[h+3*o]=u},s.prototype.copy=function(o){for(var h=0;h<o.elements.length;h++)this.elements[h]=o.elements[h];return this},s.prototype.toString=function(){for(var o="",h=",",u=0;u<9;u++)o+=this.elements[u]+h;return o},s.prototype.reverse=function(o){o=o||new s;for(var h=3,u=6,c=[],l=0;l<h*u;l++)c.push(0);var l,d;for(l=0;l<3;l++)for(d=0;d<3;d++)c[l+u*d]=this.elements[l+3*d];c[3+6*0]=1,c[3+6*1]=0,c[3+6*2]=0,c[4+6*0]=0,c[4+6*1]=1,c[4+6*2]=0,c[5+6*0]=0,c[5+6*1]=0,c[5+6*2]=1;var p=3,v=p,g,m=u,f;do{if(l=v-p,c[l+u*l]===0){for(d=l+1;d<v;d++)if(c[l+u*d]!==0){g=m;do f=m-g,c[f+u*l]+=c[f+u*d];while(--g);break}}if(c[l+u*l]!==0)for(d=l+1;d<v;d++){var _=c[l+u*d]/c[l+u*l];g=m;do f=m-g,c[f+u*d]=f<=l?0:c[f+u*d]-c[f+u*l]*_;while(--g)}}while(--p);l=2;do{d=l-1;do{var _=c[l+u*d]/c[l+u*l];g=u;do f=u-g,c[f+u*d]=c[f+u*d]-c[f+u*l]*_;while(--g)}while(d--)}while(--l);l=2;do{var _=1/c[l+u*l];g=u;do f=u-g,c[f+u*l]=c[f+u*l]*_;while(--g)}while(l--);l=2;do{d=2;do{if(f=c[h+d+u*l],isNaN(f)||f===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,d,f)}while(d--)}while(l--);return o},s.prototype.setRotationFromQuaternion=function(o){var h=o.x,u=o.y,c=o.z,l=o.w,d=h+h,p=u+u,v=c+c,g=h*d,m=h*p,f=h*v,_=u*p,x=u*v,y=c*v,M=l*d,C=l*p,V=l*v,N=this.elements;return N[3*0+0]=1-(_+y),N[3*0+1]=m-V,N[3*0+2]=f+C,N[3*1+0]=m+V,N[3*1+1]=1-(g+y),N[3*1+2]=x-M,N[3*2+0]=f-C,N[3*2+1]=x+M,N[3*2+2]=1-(g+_),this},s.prototype.transpose=function(o){o=o||new s;for(var h=o.elements,u=this.elements,c=0;c!==3;c++)for(var l=0;l!==3;l++)h[3*c+l]=u[3*l+c];return o}},{"./Vec3":30}],28:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(d,p,v,g){this.x=d!==void 0?d:0,this.y=p!==void 0?p:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}s.prototype.set=function(d,p,v,g){this.x=d,this.y=p,this.z=v,this.w=g},s.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},s.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},s.prototype.setFromAxisAngle=function(d,p){var v=Math.sin(p*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(p*.5)},s.prototype.toAxisAngle=function(d){d=d||new r,this.normalize();var p=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,p]};var o=new r,h=new r;s.prototype.setFromVectors=function(d,p){if(d.isAntiparallelTo(p)){var v=o,g=h;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=d.cross(p);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(p.norm(),2))+d.dot(p),this.normalize()}};var u=new r,c=new r,l=new r;s.prototype.mult=function(d,p){p=p||new s;var v=this.w,g=u,m=c,f=l;return g.set(this.x,this.y,this.z),m.set(d.x,d.y,d.z),p.w=v*d.w-g.dot(m),g.cross(m,f),p.x=v*m.x+d.w*g.x+f.x,p.y=v*m.y+d.w*g.y+f.y,p.z=v*m.z+d.w*g.z+f.z,p},s.prototype.inverse=function(d){var p=this.x,v=this.y,g=this.z,m=this.w;d=d||new s,this.conjugate(d);var f=1/(p*p+v*v+g*g+m*m);return d.x*=f,d.y*=f,d.z*=f,d.w*=f,d},s.prototype.conjugate=function(d){return d=d||new s,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},s.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.vmult=function(d,p){p=p||new r;var v=d.x,g=d.y,m=d.z,f=this.x,_=this.y,x=this.z,y=this.w,M=y*v+_*m-x*g,C=y*g+x*v-f*m,V=y*m+f*g-_*v,N=-f*v-_*g-x*m;return p.x=M*y+N*-f+C*-x-V*-_,p.y=C*y+N*-_+V*-f-M*-x,p.z=V*y+N*-x+M*-_-C*-f,p},s.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},s.prototype.toEuler=function(d,p){p=p||"YZX";var v,g,m,f=this.x,_=this.y,x=this.z,y=this.w;switch(p){case"YZX":var M=f*_+x*y;if(M>.499&&(v=2*Math.atan2(f,y),g=Math.PI/2,m=0),M<-.499&&(v=-2*Math.atan2(f,y),g=-Math.PI/2,m=0),isNaN(v)){var C=f*f,V=_*_,N=x*x;v=Math.atan2(2*_*y-2*f*x,1-2*V-2*N),g=Math.asin(2*M),m=Math.atan2(2*f*y-2*_*x,1-2*C-2*N)}break;default:throw new Error("Euler order "+p+" not supported yet.")}d.y=v,d.z=g,d.x=m},s.prototype.setFromEuler=function(d,p,v,g){g=g||"XYZ";var m=Math.cos(d/2),f=Math.cos(p/2),_=Math.cos(v/2),x=Math.sin(d/2),y=Math.sin(p/2),M=Math.sin(v/2);return g==="XYZ"?(this.x=x*f*_+m*y*M,this.y=m*y*_-x*f*M,this.z=m*f*M+x*y*_,this.w=m*f*_-x*y*M):g==="YXZ"?(this.x=x*f*_+m*y*M,this.y=m*y*_-x*f*M,this.z=m*f*M-x*y*_,this.w=m*f*_+x*y*M):g==="ZXY"?(this.x=x*f*_-m*y*M,this.y=m*y*_+x*f*M,this.z=m*f*M+x*y*_,this.w=m*f*_-x*y*M):g==="ZYX"?(this.x=x*f*_-m*y*M,this.y=m*y*_+x*f*M,this.z=m*f*M-x*y*_,this.w=m*f*_+x*y*M):g==="YZX"?(this.x=x*f*_+m*y*M,this.y=m*y*_+x*f*M,this.z=m*f*M-x*y*_,this.w=m*f*_-x*y*M):g==="XZY"&&(this.x=x*f*_-m*y*M,this.y=m*y*_-x*f*M,this.z=m*f*M+x*y*_,this.w=m*f*_+x*y*M),this},s.prototype.clone=function(){return new s(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,a){var r=e("./Vec3"),s=e("./Quaternion");n.exports=o;function o(u){u=u||{},this.position=new r,u.position&&this.position.copy(u.position),this.quaternion=new s,u.quaternion&&this.quaternion.copy(u.quaternion)}var h=new s;o.pointToLocalFrame=function(u,c,l,p){var p=p||new r;return l.vsub(u,p),c.conjugate(h),h.vmult(p,p),p},o.prototype.pointToLocal=function(u,c){return o.pointToLocalFrame(this.position,this.quaternion,u,c)},o.pointToWorldFrame=function(u,c,l,p){var p=p||new r;return c.vmult(l,p),p.vadd(u,p),p},o.prototype.pointToWorld=function(u,c){return o.pointToWorldFrame(this.position,this.quaternion,u,c)},o.prototype.vectorToWorldFrame=function(u,l){var l=l||new r;return this.quaternion.vmult(u,l),l},o.vectorToWorldFrame=function(u,c,l){return u.vmult(c,l),l},o.vectorToLocalFrame=function(u,c,l,p){var p=p||new r;return c.w*=-1,c.vmult(l,p),c.w*=-1,p}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,a){n.exports=s;var r=e("./Mat3");function s(c,l,d){this.x=c||0,this.y=l||0,this.z=d||0}s.ZERO=new s(0,0,0),s.UNIT_X=new s(1,0,0),s.UNIT_Y=new s(0,1,0),s.UNIT_Z=new s(0,0,1),s.prototype.cross=function(c,l){var d=c.x,p=c.y,v=c.z,g=this.x,m=this.y,f=this.z;return l=l||new s,l.x=m*v-f*p,l.y=f*d-g*v,l.z=g*p-m*d,l},s.prototype.set=function(c,l,d){return this.x=c,this.y=l,this.z=d,this},s.prototype.setZero=function(){this.x=this.y=this.z=0},s.prototype.vadd=function(c,l){if(l)l.x=c.x+this.x,l.y=c.y+this.y,l.z=c.z+this.z;else return new s(this.x+c.x,this.y+c.y,this.z+c.z)},s.prototype.vsub=function(c,l){if(l)l.x=this.x-c.x,l.y=this.y-c.y,l.z=this.z-c.z;else return new s(this.x-c.x,this.y-c.y,this.z-c.z)},s.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},s.prototype.normalize=function(){var c=this.x,l=this.y,d=this.z,p=Math.sqrt(c*c+l*l+d*d);if(p>0){var v=1/p;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return p},s.prototype.unit=function(c){c=c||new s;var l=this.x,d=this.y,p=this.z,v=Math.sqrt(l*l+d*d+p*p);return v>0?(v=1/v,c.x=l*v,c.y=d*v,c.z=p*v):(c.x=1,c.y=0,c.z=0),c},s.prototype.norm=function(){var c=this.x,l=this.y,d=this.z;return Math.sqrt(c*c+l*l+d*d)},s.prototype.length=s.prototype.norm,s.prototype.norm2=function(){return this.dot(this)},s.prototype.lengthSquared=s.prototype.norm2,s.prototype.distanceTo=function(c){var l=this.x,d=this.y,p=this.z,v=c.x,g=c.y,m=c.z;return Math.sqrt((v-l)*(v-l)+(g-d)*(g-d)+(m-p)*(m-p))},s.prototype.distanceSquared=function(c){var l=this.x,d=this.y,p=this.z,v=c.x,g=c.y,m=c.z;return(v-l)*(v-l)+(g-d)*(g-d)+(m-p)*(m-p)},s.prototype.mult=function(c,l){l=l||new s;var d=this.x,p=this.y,v=this.z;return l.x=c*d,l.y=c*p,l.z=c*v,l},s.prototype.scale=s.prototype.mult,s.prototype.dot=function(c){return this.x*c.x+this.y*c.y+this.z*c.z},s.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},s.prototype.negate=function(c){return c=c||new s,c.x=-this.x,c.y=-this.y,c.z=-this.z,c};var o=new s,h=new s;s.prototype.tangents=function(c,l){var d=this.norm();if(d>0){var p=o,v=1/d;p.set(this.x*v,this.y*v,this.z*v);var g=h;Math.abs(p.x)<.9?(g.set(1,0,0),p.cross(g,c)):(g.set(0,1,0),p.cross(g,c)),p.cross(c,l)}else c.set(1,0,0),l.set(0,1,0)},s.prototype.toString=function(){return this.x+","+this.y+","+this.z},s.prototype.toArray=function(){return[this.x,this.y,this.z]},s.prototype.copy=function(c){return this.x=c.x,this.y=c.y,this.z=c.z,this},s.prototype.lerp=function(c,l,d){var p=this.x,v=this.y,g=this.z;d.x=p+(c.x-p)*l,d.y=v+(c.y-v)*l,d.z=g+(c.z-g)*l},s.prototype.almostEquals=function(c,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-c.x)>l||Math.abs(this.y-c.y)>l||Math.abs(this.z-c.z)>l)},s.prototype.almostZero=function(c){return c===void 0&&(c=1e-6),!(Math.abs(this.x)>c||Math.abs(this.y)>c||Math.abs(this.z)>c)};var u=new s;s.prototype.isAntiparallelTo=function(c,l){return this.negate(u),u.almostEquals(c,l)},s.prototype.clone=function(){return new s(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,a){n.exports=l;var r=e("../utils/EventTarget");e("../shapes/Shape");var s=e("../math/Vec3"),o=e("../math/Mat3"),h=e("../math/Quaternion");e("../material/Material");var u=e("../collision/AABB"),c=e("../shapes/Box");function l(I){I=I||{},r.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup=typeof I.collisionFilterGroup=="number"?I.collisionFilterGroup:1,this.collisionFilterMask=typeof I.collisionFilterMask=="number"?I.collisionFilterMask:1,this.collisionResponse=!0,this.position=new s,I.position&&this.position.copy(I.position),this.previousPosition=new s,this.initPosition=new s,this.velocity=new s,I.velocity&&this.velocity.copy(I.velocity),this.initVelocity=new s,this.force=new s;var W=typeof I.mass=="number"?I.mass:0;this.mass=W,this.invMass=W>0?1/W:0,this.material=I.material||null,this.linearDamping=typeof I.linearDamping=="number"?I.linearDamping:.01,this.type=W<=0?l.STATIC:l.DYNAMIC,typeof I.type==typeof l.STATIC&&(this.type=I.type),this.allowSleep=typeof I.allowSleep<"u"?I.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof I.sleepSpeedLimit<"u"?I.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof I.sleepTimeLimit<"u"?I.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new h,I.quaternion&&this.quaternion.copy(I.quaternion),this.initQuaternion=new h,this.angularVelocity=new s,I.angularVelocity&&this.angularVelocity.copy(I.angularVelocity),this.initAngularVelocity=new s,this.interpolatedPosition=new s,this.interpolatedQuaternion=new h,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof I.fixedRotation<"u"?I.fixedRotation:!1,this.angularDamping=typeof I.angularDamping<"u"?I.angularDamping:.01,this.aabb=new u,this.aabbNeedsUpdate=!0,this.wlambda=new s,I.shape&&this.addShape(I.shape),this.updateMassProperties()}l.prototype=new r,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var I=this.sleepState;this.sleepState=0,I===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(I){if(this.allowSleep){var W=this.sleepState,D=this.velocity.norm2()+this.angularVelocity.norm2(),k=Math.pow(this.sleepSpeedLimit,2);W===l.AWAKE&&D<k?(this.sleepState=l.SLEEPY,this.timeLastSleepy=I,this.dispatchEvent(l.sleepyEvent)):W===l.SLEEPY&&D>k?this.wakeUp():W===l.SLEEPY&&I-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(I,D){var D=D||new s;return I.vsub(this.position,D),this.quaternion.conjugate().vmult(D,D),D},l.prototype.vectorToLocalFrame=function(I,D){var D=D||new s;return this.quaternion.conjugate().vmult(I,D),D},l.prototype.pointToWorldFrame=function(I,D){var D=D||new s;return this.quaternion.vmult(I,D),D.vadd(this.position,D),D},l.prototype.vectorToWorldFrame=function(I,D){var D=D||new s;return this.quaternion.vmult(I,D),D};var d=new s,p=new h;l.prototype.addShape=function(I,W,D){var k=new s,X=new h;return W&&k.copy(W),D&&X.copy(D),this.shapes.push(I),this.shapeOffsets.push(k),this.shapeOrientations.push(X),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var I=this.shapes,W=this.shapeOffsets,D=I.length,k=0,X=0;X!==D;X++){var st=I[X];st.updateBoundingSphereRadius();var F=W[X].norm(),U=st.boundingSphereRadius;F+U>k&&(k=F+U)}this.boundingRadius=k};var v=new u;l.prototype.computeAABB=function(){for(var I=this.shapes,W=this.shapeOffsets,D=this.shapeOrientations,k=I.length,X=d,st=p,F=this.quaternion,U=this.aabb,Z=v,Y=0;Y!==k;Y++){var O=I[Y];D[Y].mult(F,st),st.vmult(W[Y],X),X.vadd(this.position,X),O.calculateWorldAABB(X,st,Z.lowerBound,Z.upperBound),Y===0?U.copy(Z):U.extend(Z)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(I){var W=this.invInertia;if(!(W.x===W.y&&W.y===W.z&&!I)){var D=g,k=m;D.setRotationFromQuaternion(this.quaternion),D.transpose(k),D.scale(W,D),D.mmult(k,this.invInertiaWorld)}};var f=new s,_=new s;l.prototype.applyForce=function(I,W){if(this.type===l.DYNAMIC){var D=f;W.vsub(this.position,D);var k=_;D.cross(I,k),this.force.vadd(I,this.force),this.torque.vadd(k,this.torque)}};var x=new s,y=new s;l.prototype.applyLocalForce=function(I,W){if(this.type===l.DYNAMIC){var D=x,k=y;this.vectorToWorldFrame(I,D),this.pointToWorldFrame(W,k),this.applyForce(D,k)}};var M=new s,C=new s,V=new s;l.prototype.applyImpulse=function(I,W){if(this.type===l.DYNAMIC){var D=M;W.vsub(this.position,D);var k=C;k.copy(I),k.mult(this.invMass,k),this.velocity.vadd(k,this.velocity);var X=V;D.cross(I,X),this.invInertiaWorld.vmult(X,X),this.angularVelocity.vadd(X,this.angularVelocity)}};var N=new s,E=new s;l.prototype.applyLocalImpulse=function(I,W){if(this.type===l.DYNAMIC){var D=N,k=E;this.vectorToWorldFrame(I,D),this.pointToWorldFrame(W,k),this.applyImpulse(D,k)}};var S=new s;l.prototype.updateMassProperties=function(){var I=S;this.invMass=this.mass>0?1/this.mass:0;var W=this.inertia,D=this.fixedRotation;this.computeAABB(),I.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),c.calculateInertia(I,this.mass,W),this.invInertia.set(W.x>0&&!D?1/W.x:0,W.y>0&&!D?1/W.y:0,W.z>0&&!D?1/W.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(I,W){var D=new s;return I.vsub(this.position,D),this.angularVelocity.cross(D,W),this.velocity.vadd(W,W),W}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,a){e("./Body");var r=e("../math/Vec3"),s=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),h=e("../objects/WheelInfo");n.exports=u;function u(F){this.chassisBody=F.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof F.indexRightAxis<"u"?F.indexRightAxis:1,this.indexForwardAxis=typeof F.indexForwardAxis<"u"?F.indexForwardAxis:0,this.indexUpAxis=typeof F.indexUpAxis<"u"?F.indexUpAxis:2}new r,new r,new r;var c=new r,l=new r,d=new r;new o,u.prototype.addWheel=function(F){F=F||{};var U=new h(F),Z=this.wheelInfos.length;return this.wheelInfos.push(U),Z},u.prototype.setSteeringValue=function(F,U){var Z=this.wheelInfos[U];Z.steering=F},new r,u.prototype.applyEngineForce=function(F,U){this.wheelInfos[U].engineForce=F},u.prototype.setBrake=function(F,U){this.wheelInfos[U].brake=F},u.prototype.addToWorld=function(F){this.constraints,F.add(this.chassisBody);var U=this;this.preStepCallback=function(){U.updateVehicle(F.dt)},F.addEventListener("preStep",this.preStepCallback),this.world=F},u.prototype.getVehicleAxisWorld=function(F,U){U.set(F===0?1:0,F===1?1:0,F===2?1:0),this.chassisBody.vectorToWorldFrame(U,U)},u.prototype.updateVehicle=function(F){for(var U=this.wheelInfos,Z=U.length,Y=this.chassisBody,O=0;O<Z;O++)this.updateWheelTransform(O);this.currentVehicleSpeedKmHour=3.6*Y.velocity.norm();var L=new r;this.getVehicleAxisWorld(this.indexForwardAxis,L),L.dot(Y.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var O=0;O<Z;O++)this.castRay(U[O]);this.updateSuspension(F);for(var R=new r,A=new r,O=0;O<Z;O++){var T=U[O],H=T.suspensionForce;H>T.maxSuspensionForce&&(H=T.maxSuspensionForce),T.raycastResult.hitNormalWorld.scale(H*F,R),T.raycastResult.hitPointWorld.vsub(Y.position,A),Y.applyImpulse(R,T.raycastResult.hitPointWorld)}this.updateFriction(F);var tt=new r,nt=new r,K=new r;for(O=0;O<Z;O++){var T=U[O];Y.getVelocityAtWorldPoint(T.chassisConnectionPointWorld,K);var ut=1;switch(this.indexUpAxis){case 1:ut=-1;break}if(T.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,nt);var dt=nt.dot(T.raycastResult.hitNormalWorld);T.raycastResult.hitNormalWorld.scale(dt,tt),nt.vsub(tt,nt);var q=nt.dot(K);T.deltaRotation=ut*q*F/T.radius}(T.sliding||!T.isInContact)&&T.engineForce!==0&&T.useCustomSlidingRotationalSpeed&&(T.deltaRotation=(T.engineForce>0?1:-1)*T.customSlidingRotationalSpeed*F),Math.abs(T.brake)>Math.abs(T.engineForce)&&(T.deltaRotation=0),T.rotation+=T.deltaRotation,T.deltaRotation*=.99}},u.prototype.updateSuspension=function(F){for(var U=this.chassisBody,Z=U.mass,Y=this.wheelInfos,O=Y.length,L=0;L<O;L++){var R=Y[L];if(R.isInContact){var A,T=R.suspensionRestLength,H=R.suspensionLength,tt=T-H;A=R.suspensionStiffness*tt*R.clippedInvContactDotSuspension;var nt=R.suspensionRelativeVelocity,K;nt<0?K=R.dampingCompression:K=R.dampingRelaxation,A-=K*nt,R.suspensionForce=A*Z,R.suspensionForce<0&&(R.suspensionForce=0)}else R.suspensionForce=0}},u.prototype.removeFromWorld=function(F){this.constraints,F.remove(this.chassisBody),F.removeEventListener("preStep",this.preStepCallback),this.world=null};var p=new r,v=new r;u.prototype.castRay=function(F){var U=p,Z=v;this.updateWheelTransformWorld(F);var Y=this.chassisBody,O=-1,L=F.suspensionRestLength+F.radius;F.directionWorld.scale(L,U);var R=F.chassisConnectionPointWorld;R.vadd(U,Z);var A=F.raycastResult;A.reset();var T=Y.collisionResponse;Y.collisionResponse=!1,this.world.rayTest(R,Z,A),Y.collisionResponse=T;var H=A.body;if(F.raycastResult.groundObject=0,H){O=A.distance,F.raycastResult.hitNormalWorld=A.hitNormalWorld,F.isInContact=!0;var tt=A.distance;F.suspensionLength=tt-F.radius;var nt=F.suspensionRestLength-F.maxSuspensionTravel,K=F.suspensionRestLength+F.maxSuspensionTravel;F.suspensionLength<nt&&(F.suspensionLength=nt),F.suspensionLength>K&&(F.suspensionLength=K,F.raycastResult.reset());var ut=F.raycastResult.hitNormalWorld.dot(F.directionWorld),dt=new r;Y.getVelocityAtWorldPoint(F.raycastResult.hitPointWorld,dt);var q=F.raycastResult.hitNormalWorld.dot(dt);if(ut>=-.1)F.suspensionRelativeVelocity=0,F.clippedInvContactDotSuspension=1/.1;else{var bt=-1/ut;F.suspensionRelativeVelocity=q*bt,F.clippedInvContactDotSuspension=bt}}else F.suspensionLength=F.suspensionRestLength+0*F.maxSuspensionTravel,F.suspensionRelativeVelocity=0,F.directionWorld.scale(-1,F.raycastResult.hitNormalWorld),F.clippedInvContactDotSuspension=1;return O},u.prototype.updateWheelTransformWorld=function(F){F.isInContact=!1;var U=this.chassisBody;U.pointToWorldFrame(F.chassisConnectionPointLocal,F.chassisConnectionPointWorld),U.vectorToWorldFrame(F.directionLocal,F.directionWorld),U.vectorToWorldFrame(F.axleLocal,F.axleWorld)},u.prototype.updateWheelTransform=function(F){var U=c,Z=l,Y=d,O=this.wheelInfos[F];this.updateWheelTransformWorld(O),O.directionLocal.scale(-1,U),Z.copy(O.axleLocal),U.cross(Z,Y),Y.normalize(),Z.normalize();var L=O.steering,R=new s;R.setFromAxisAngle(U,L);var A=new s;A.setFromAxisAngle(Z,O.rotation);var T=O.worldTransform.quaternion;this.chassisBody.quaternion.mult(R,T),T.mult(A,T),T.normalize();var H=O.worldTransform.position;H.copy(O.directionWorld),H.scale(O.suspensionLength,H),H.vadd(O.chassisConnectionPointWorld,H)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];u.prototype.getWheelTransformWorld=function(F){return this.wheelInfos[F].worldTransform};var m=new r,f=[],_=[],x=1;u.prototype.updateFriction=function(F){for(var U=m,Z=this.wheelInfos,Y=Z.length,O=this.chassisBody,L=_,R=f,A=0;A<Y;A++){var T=Z[A],H=T.raycastResult.body;T.sideImpulse=0,T.forwardImpulse=0,L[A]||(L[A]=new r),R[A]||(R[A]=new r)}for(var A=0;A<Y;A++){var T=Z[A],H=T.raycastResult.body;if(H){var tt=R[A],nt=this.getWheelTransformWorld(A);nt.vectorToWorldFrame(g[this.indexRightAxis],tt);var K=T.raycastResult.hitNormalWorld,ut=tt.dot(K);K.scale(ut,U),tt.vsub(U,tt),tt.normalize(),K.cross(tt,L[A]),L[A].normalize(),T.sideImpulse=st(O,T.raycastResult.hitPointWorld,H,T.raycastResult.hitPointWorld,tt),T.sideImpulse*=x}}var dt=1,q=.5;this.sliding=!1;for(var A=0;A<Y;A++){var T=Z[A],H=T.raycastResult.body,bt=0;if(T.slipInfo=1,H){var pt=0,rt=T.brake?T.brake:pt;bt=V(O,H,T.raycastResult.hitPointWorld,L[A],rt),bt+=T.engineForce*F;var lt=rt/bt;T.slipInfo*=lt}if(T.forwardImpulse=0,T.skidInfo=1,H){T.skidInfo=1;var qt=T.suspensionForce*F*T.frictionSlip,Tt=qt,Vt=qt*Tt;T.forwardImpulse=bt;var Mt=T.forwardImpulse*q,jt=T.sideImpulse*dt,Jt=Mt*Mt+jt*jt;if(T.sliding=!1,Jt>Vt){this.sliding=!0,T.sliding=!0;var lt=qt/Math.sqrt(Jt);T.skidInfo*=lt}}}if(this.sliding)for(var A=0;A<Y;A++){var T=Z[A];T.sideImpulse!==0&&T.skidInfo<1&&(T.forwardImpulse*=T.skidInfo,T.sideImpulse*=T.skidInfo)}for(var A=0;A<Y;A++){var T=Z[A],P=new r;if(P.copy(T.raycastResult.hitPointWorld),T.forwardImpulse!==0){var b=new r;L[A].scale(T.forwardImpulse,b),O.applyImpulse(b,P)}if(T.sideImpulse!==0){var H=T.raycastResult.body,et=new r;et.copy(T.raycastResult.hitPointWorld);var gt=new r;R[A].scale(T.sideImpulse,gt),O.pointToLocalFrame(P,P),P["xyz"[this.indexUpAxis]]*=T.rollInfluence,O.pointToWorldFrame(P,P),O.applyImpulse(gt,P),gt.scale(-1,gt),H.applyImpulse(gt,et)}}};var y=new r,M=new r,C=new r;function V(F,U,Z,Y,O){var L=0,R=Z,A=y,T=M,H=C;F.getVelocityAtWorldPoint(R,A),U.getVelocityAtWorldPoint(R,T),A.vsub(T,H);var tt=Y.dot(H),nt=W(F,Z,Y),K=W(U,Z,Y),ut=1,dt=ut/(nt+K);return L=-tt*dt,O<L&&(L=O),L<-O&&(L=-O),L}var N=new r,E=new r,S=new r,I=new r;function W(F,U,Z){var Y=N,O=E,L=S,R=I;return U.vsub(F.position,Y),Y.cross(Z,O),F.invInertiaWorld.vmult(O,R),R.cross(Y,L),F.invMass+Z.dot(L)}var D=new r,k=new r,X=new r;function st(F,U,Z,Y,O,ut){var R=O.norm2();if(R>1.1)return 0;var A=D,T=k,H=X;F.getVelocityAtWorldPoint(U,A),Z.getVelocityAtWorldPoint(Y,T),A.vsub(T,H);var tt=O.dot(H),nt=.2,K=1/(F.invMass+Z.invMass),ut=-nt*tt*K;return ut}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,a){var r=e("./Body"),s=e("../shapes/Sphere"),o=e("../shapes/Box"),h=e("../math/Vec3"),u=e("../constraints/HingeConstraint");n.exports=c;function c(p){if(this.wheelBodies=[],this.coordinateSystem=typeof p.coordinateSystem>"u"?new h(1,2,3):p.coordinateSystem.clone(),this.chassisBody=p.chassisBody,!this.chassisBody){var v=new o(new h(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}c.prototype.addWheel=function(p){p=p||{};var v=p.body;v||(v=new r(1,new s(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new h;var g=typeof p.position<"u"?p.position.clone():new h,m=new h;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var f=typeof p.axis<"u"?p.axis.clone():new h(0,1,0);this.wheelAxes.push(f);var _=new u(this.chassisBody,v,{pivotA:g,axisA:f,pivotB:h.ZERO,axisB:f,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},c.prototype.setSteeringValue=function(p,v){var g=this.wheelAxes[v],m=Math.cos(p),f=Math.sin(p),_=g.x,x=g.y;this.constraints[v].axisA.set(m*_-f*x,f*_+m*x,0)},c.prototype.setMotorSpeed=function(p,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=p},c.prototype.disableMotor=function(p){var v=this.constraints[p];v.disableMotor()};var l=new h;c.prototype.setWheelForce=function(p,v){this.wheelForces[v]=p},c.prototype.applyWheelForce=function(p,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],f=m.torque;g.scale(p,l),m.vectorToWorldFrame(l,l),f.vadd(l,f)},c.prototype.addToWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.add(g[m]);for(var m=0;m<v.length;m++)p.addConstraint(v[m]);p.addEventListener("preStep",this._update.bind(this))},c.prototype._update=function(){for(var p=this.wheelForces,v=0;v<p.length;v++)this.applyWheelForce(p[v],v)},c.prototype.removeFromWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.remove(g[m]);for(var m=0;m<v.length;m++)p.removeConstraint(v[m])};var d=new h;c.prototype.getWheelSpeed=function(p){var v=this.wheelAxes[p],g=this.wheelBodies[p],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),m.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,a){n.exports=s,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function s(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}s.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},s.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;s.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,f=v.id,_=this.smoothingRadius*this.smoothingRadius,x=o,y=0;y!==m;y++){var M=this.particles[y];M.position.vsub(v.position,x),f!==M.id&&x.norm2()<_&&g.push(M)}};var h=new r,u=new r,c=new r,l=new r,d=new r,p=new r;s.prototype.update=function(){for(var v=this.particles.length,g=h,m=this.speedOfSound,f=this.eps,_=0;_!==v;_++){var x=this.particles[_],y=this.neighbors[_];y.length=0,this.getNeighbors(x,y),y.push(this.particles[_]);for(var M=y.length,C=0,V=0;V!==M;V++){x.position.vsub(y[V].position,g);var N=g.norm(),E=this.w(N);C+=y[V].mass*E}this.densities[_]=C,this.pressures[_]=m*m*(this.densities[_]-this.density)}for(var S=u,I=c,W=l,D=d,k=p,_=0;_!==v;_++){var X=this.particles[_];S.set(0,0,0),I.set(0,0,0);for(var st,F,y=this.neighbors[_],M=y.length,V=0;V!==M;V++){var U=y[V];X.position.vsub(U.position,D);var Z=D.norm();st=-U.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+f)+this.pressures[V]/(this.densities[V]*this.densities[V]+f)),this.gradw(D,W),W.mult(st,W),S.vadd(W,S),U.velocity.vsub(X.velocity,k),k.mult(1/(1e-4+this.densities[_]*this.densities[V])*this.viscosity*U.mass,k),F=this.nablaw(Z),k.mult(F,k),I.vadd(k,I)}I.mult(X.mass,I),S.mult(X.mass,S),X.force.vadd(I,X.force),X.force.vadd(S,X.force)}},s.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},s.prototype.gradw=function(v,g){var m=v.norm(),f=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(f,9))*Math.pow(f*f-m*m,2),g)},s.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,a){var r=e("../math/Vec3");n.exports=s;function s(_,x,y){y=y||{},this.restLength=typeof y.restLength=="number"?y.restLength:1,this.stiffness=y.stiffness||100,this.damping=y.damping||1,this.bodyA=_,this.bodyB=x,this.localAnchorA=new r,this.localAnchorB=new r,y.localAnchorA&&this.localAnchorA.copy(y.localAnchorA),y.localAnchorB&&this.localAnchorB.copy(y.localAnchorB),y.worldAnchorA&&this.setWorldAnchorA(y.worldAnchorA),y.worldAnchorB&&this.setWorldAnchorB(y.worldAnchorB)}s.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},s.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},s.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},s.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var o=new r,h=new r,u=new r,c=new r,l=new r,d=new r,p=new r,v=new r,g=new r,m=new r,f=new r;s.prototype.applyForce=function(){var _=this.stiffness,x=this.damping,y=this.restLength,M=this.bodyA,C=this.bodyB,V=o,N=h,E=u,S=c,I=f,W=l,D=d,k=p,X=v,st=g,F=m;this.getWorldAnchorA(W),this.getWorldAnchorB(D),W.vsub(M.position,k),D.vsub(C.position,X),D.vsub(W,V);var U=V.norm();N.copy(V),N.normalize(),C.velocity.vsub(M.velocity,E),C.angularVelocity.cross(X,I),E.vadd(I,E),M.angularVelocity.cross(k,I),E.vsub(I,E),N.mult(-_*(U-y)-x*E.dot(N),S),M.force.vsub(S,M.force),C.force.vadd(S,C.force),k.cross(S,st),X.cross(S,F),M.torque.vsub(st,M.torque),C.torque.vadd(F,C.torque)}},{"../math/Vec3":30}],36:[function(e,n,a){var r=e("../math/Vec3"),s=e("../math/Transform"),o=e("../collision/RaycastResult"),h=e("../utils/Utils");n.exports=u;function u(d){d=h.defaults(d,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new s,this.isInContact=!1}var l=new r,c=new r,l=new r;u.prototype.updateWheel=function(d){var p=this.raycastResult;if(this.isInContact){var v=p.hitNormalWorld.dot(p.directionWorld);p.hitPointWorld.vsub(d.position,c),d.getVelocityAtWorldPoint(c,l);var g=p.hitNormalWorld.dot(l);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else p.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,p.directionWorld.scale(-1,p.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,a){n.exports=h;var r=e("./Shape"),s=e("../math/Vec3"),o=e("./ConvexPolyhedron");function h(l){r.call(this),this.type=r.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}h.prototype=new r,h.prototype.constructor=h,h.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,d=this.halfExtents.y,p=this.halfExtents.z,v=s,g=[new v(-l,-d,-p),new v(l,-d,-p),new v(l,d,-p),new v(-l,d,-p),new v(-l,-d,p),new v(l,-d,p),new v(l,d,p),new v(-l,d,p)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var f=new o(g,m);this.convexPolyhedronRepresentation=f,f.material=this.material},h.prototype.calculateLocalInertia=function(l,d){return d=d||new s,h.calculateInertia(this.halfExtents,l,d),d},h.calculateInertia=function(l,d,p){var v=l;p.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),p.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),p.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},h.prototype.getSideNormals=function(l,d){var p=l,v=this.halfExtents;if(p[0].set(v.x,0,0),p[1].set(0,v.y,0),p[2].set(0,0,v.z),p[3].set(-v.x,0,0),p[4].set(0,-v.y,0),p[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==p.length;g++)d.vmult(p[g],p[g]);return p},h.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},h.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var u=new s;new s,h.prototype.forEachWorldCorner=function(l,d,p){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)u.set(g[m][0],g[m][1],g[m][2]),d.vmult(u,u),l.vadd(u,u),p(u.x,u.y,u.z)};var c=[new s,new s,new s,new s,new s,new s,new s,new s];h.prototype.calculateWorldAABB=function(l,d,p,v){var g=this.halfExtents;c[0].set(g.x,g.y,g.z),c[1].set(-g.x,g.y,g.z),c[2].set(-g.x,-g.y,g.z),c[3].set(-g.x,-g.y,-g.z),c[4].set(g.x,-g.y,-g.z),c[5].set(g.x,g.y,-g.z),c[6].set(-g.x,g.y,-g.z),c[7].set(g.x,-g.y,g.z);var m=c[0];d.vmult(m,m),l.vadd(m,m),v.copy(m),p.copy(m);for(var f=1;f<8;f++){var m=c[f];d.vmult(m,m),l.vadd(m,m);var _=m.x,x=m.y,y=m.z;_>v.x&&(v.x=_),x>v.y&&(v.y=x),y>v.z&&(v.z=y),_<p.x&&(p.x=_),x<p.y&&(p.y=x),y<p.z&&(p.z=y)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,a){n.exports=h;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function h(O,L,R){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=O||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=L||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=R?R.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}h.prototype=new r,h.prototype.constructor=h;var u=new s;h.prototype.computeEdges=function(){var O=this.faces,L=this.vertices;L.length;var R=this.uniqueEdges;R.length=0;for(var A=u,T=0;T!==O.length;T++)for(var H=O[T],tt=H.length,nt=0;nt!==tt;nt++){var K=(nt+1)%tt;L[H[nt]].vsub(L[H[K]],A),A.normalize();for(var ut=!1,dt=0;dt!==R.length;dt++)if(R[dt].almostEquals(A)||R[dt].almostEquals(A)){ut=!0;break}ut||R.push(A.clone())}},h.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var O=0;O<this.faces.length;O++){for(var L=0;L<this.faces[O].length;L++)if(!this.vertices[this.faces[O][L]])throw new Error("Vertex "+this.faces[O][L]+" not found!");var R=this.faceNormals[O]||new s;this.getFaceNormal(O,R),R.negate(R),this.faceNormals[O]=R;var A=this.vertices[this.faces[O][0]];if(R.dot(A)<0){console.error(".faceNormals["+O+"] = Vec3("+R.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var L=0;L<this.faces[O].length;L++)console.warn(".vertices["+this.faces[O][L]+"] = Vec3("+this.vertices[this.faces[O][L]].toString()+")")}}};var c=new s,l=new s;h.computeNormal=function(O,L,R,A){L.vsub(O,l),R.vsub(L,c),c.cross(l,A),A.isZero()||A.normalize()},h.prototype.getFaceNormal=function(O,L){var R=this.faces[O],A=this.vertices[R[0]],T=this.vertices[R[1]],H=this.vertices[R[2]];return h.computeNormal(A,T,H,L)};var d=new s;h.prototype.clipAgainstHull=function(O,L,R,A,T,H,tt,nt,K){for(var ut=d,dt=-1,q=-Number.MAX_VALUE,bt=0;bt<R.faces.length;bt++){ut.copy(R.faceNormals[bt]),T.vmult(ut,ut);var pt=ut.dot(H);pt>q&&(q=pt,dt=bt)}for(var rt=[],lt=R.faces[dt],qt=lt.length,Tt=0;Tt<qt;Tt++){var Vt=R.vertices[lt[Tt]],Mt=new s;Mt.copy(Vt),T.vmult(Mt,Mt),A.vadd(Mt,Mt),rt.push(Mt)}dt>=0&&this.clipFaceAgainstHull(H,O,L,rt,tt,nt,K)};var p=new s,v=new s,g=new s,m=new s,f=new s,_=new s;h.prototype.findSeparatingAxis=function(O,L,R,A,T,H,tt,nt){var K=p,ut=v,dt=g,q=m,bt=f,pt=_,rt=Number.MAX_VALUE,lt=this;if(lt.uniqueAxes)for(var Tt=0;Tt!==lt.uniqueAxes.length;Tt++){R.vmult(lt.uniqueAxes[Tt],K);var Mt=lt.testSepAxis(K,O,L,R,A,T);if(Mt===!1)return!1;Mt<rt&&(rt=Mt,H.copy(K))}else for(var qt=tt?tt.length:lt.faces.length,Tt=0;Tt<qt;Tt++){var Vt=tt?tt[Tt]:Tt;K.copy(lt.faceNormals[Vt]),R.vmult(K,K);var Mt=lt.testSepAxis(K,O,L,R,A,T);if(Mt===!1)return!1;Mt<rt&&(rt=Mt,H.copy(K))}if(O.uniqueAxes)for(var Tt=0;Tt!==O.uniqueAxes.length;Tt++){T.vmult(O.uniqueAxes[Tt],ut);var Mt=lt.testSepAxis(ut,O,L,R,A,T);if(Mt===!1)return!1;Mt<rt&&(rt=Mt,H.copy(ut))}else for(var jt=nt?nt.length:O.faces.length,Tt=0;Tt<jt;Tt++){var Vt=nt?nt[Tt]:Tt;ut.copy(O.faceNormals[Vt]),T.vmult(ut,ut);var Mt=lt.testSepAxis(ut,O,L,R,A,T);if(Mt===!1)return!1;Mt<rt&&(rt=Mt,H.copy(ut))}for(var Jt=0;Jt!==lt.uniqueEdges.length;Jt++){R.vmult(lt.uniqueEdges[Jt],q);for(var P=0;P!==O.uniqueEdges.length;P++)if(T.vmult(O.uniqueEdges[P],bt),q.cross(bt,pt),!pt.almostZero()){pt.normalize();var b=lt.testSepAxis(pt,O,L,R,A,T);if(b===!1)return!1;b<rt&&(rt=b,H.copy(pt))}}return A.vsub(L,dt),dt.dot(H)>0&&H.negate(H),!0};var x=[],y=[];h.prototype.testSepAxis=function(O,L,R,A,T,H){var tt=this;h.project(tt,O,R,A,x),h.project(L,O,T,H,y);var nt=x[0],K=x[1],ut=y[0],dt=y[1],q=nt-dt,bt=ut-K,pt=q<bt?q:bt;return pt};var M=new s,C=new s;h.prototype.calculateLocalInertia=function(O,L){this.computeLocalAABB(M,C);var R=C.x-M.x,A=C.y-M.y,T=C.z-M.z;L.x=1/12*O*(2*A*2*A+2*T*2*T),L.y=1/12*O*(2*R*2*R+2*T*2*T),L.z=1/12*O*(2*A*2*A+2*R*2*R)},h.prototype.getPlaneConstantOfFace=function(O){var L=this.faces[O],R=this.faceNormals[O],A=this.vertices[L[0]],T=-R.dot(A);return T};var V=new s,N=new s,E=new s,S=new s,I=new s,W=new s,D=new s,k=new s;h.prototype.clipFaceAgainstHull=function(O,L,R,A,T,H,tt){for(var nt=V,K=N,ut=E,dt=S,q=I,bt=W,pt=D,rt=k,lt=this,qt=[],Tt=A,Vt=qt,Mt=-1,jt=Number.MAX_VALUE,Jt=0;Jt<lt.faces.length;Jt++){nt.copy(lt.faceNormals[Jt]),R.vmult(nt,nt);var P=nt.dot(O);P<jt&&(jt=P,Mt=Jt)}if(!(Mt<0)){var b=lt.faces[Mt];b.connectedFaces=[];for(var et=0;et<lt.faces.length;et++)for(var gt=0;gt<lt.faces[et].length;gt++)b.indexOf(lt.faces[et][gt])!==-1&&et!==Mt&&b.connectedFaces.indexOf(et)===-1&&b.connectedFaces.push(et);Tt.length;for(var mt=b.length,B=0;B<mt;B++){var vt=lt.vertices[b[B]],yt=lt.vertices[b[(B+1)%mt]];vt.vsub(yt,K),ut.copy(K),R.vmult(ut,ut),L.vadd(ut,ut),dt.copy(this.faceNormals[Mt]),R.vmult(dt,dt),L.vadd(dt,dt),ut.cross(dt,q),q.negate(q),bt.copy(vt),R.vmult(bt,bt),L.vadd(bt,bt),-bt.dot(q);var kt;{var ct=b.connectedFaces[B];pt.copy(this.faceNormals[ct]);var Ot=this.getPlaneConstantOfFace(ct);rt.copy(pt),R.vmult(rt,rt);var kt=Ot-rt.dot(L)}for(this.clipFaceAgainstPlane(Tt,Vt,rt,kt);Tt.length;)Tt.shift();for(;Vt.length;)Tt.push(Vt.shift())}pt.copy(this.faceNormals[Mt]);var Ot=this.getPlaneConstantOfFace(Mt);rt.copy(pt),R.vmult(rt,rt);for(var kt=Ot-rt.dot(L),et=0;et<Tt.length;et++){var Ht=rt.dot(Tt[et])+kt;if(Ht<=T&&(console.log("clamped: depth="+Ht+" to minDist="+(T+"")),Ht=T),Ht<=H){var Gt=Tt[et];if(Ht<=0){var zt={point:Gt,normal:rt,depth:Ht};tt.push(zt)}}}}},h.prototype.clipFaceAgainstPlane=function(O,L,R,A){var T,H,tt=O.length;if(tt<2)return L;var nt=O[O.length-1],K=O[0];T=R.dot(nt)+A;for(var ut=0;ut<tt;ut++){if(K=O[ut],H=R.dot(K)+A,T<0)if(H<0){var dt=new s;dt.copy(K),L.push(dt)}else{var dt=new s;nt.lerp(K,T/(T-H),dt),L.push(dt)}else if(H<0){var dt=new s;nt.lerp(K,T/(T-H),dt),L.push(dt),L.push(K)}nt=K,T=H}return L},h.prototype.computeWorldVertices=function(O,L){for(var R=this.vertices.length;this.worldVertices.length<R;)this.worldVertices.push(new s);for(var A=this.vertices,T=this.worldVertices,H=0;H!==R;H++)L.vmult(A[H],T[H]),O.vadd(T[H],T[H]);this.worldVerticesNeedsUpdate=!1},new s,h.prototype.computeLocalAABB=function(O,L){var R=this.vertices.length,A=this.vertices;O.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),L.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var T=0;T<R;T++){var H=A[T];H.x<O.x?O.x=H.x:H.x>L.x&&(L.x=H.x),H.y<O.y?O.y=H.y:H.y>L.y&&(L.y=H.y),H.z<O.z?O.z=H.z:H.z>L.z&&(L.z=H.z)}},h.prototype.computeWorldFaceNormals=function(O){for(var L=this.faceNormals.length;this.worldFaceNormals.length<L;)this.worldFaceNormals.push(new s);for(var R=this.faceNormals,A=this.worldFaceNormals,T=0;T!==L;T++)O.vmult(R[T],A[T]);this.worldFaceNormalsNeedsUpdate=!1},h.prototype.updateBoundingSphereRadius=function(){for(var O=0,L=this.vertices,R=0,A=L.length;R!==A;R++){var T=L[R].norm2();T>O&&(O=T)}this.boundingSphereRadius=Math.sqrt(O)};var X=new s;h.prototype.calculateWorldAABB=function(O,L,R,A){for(var T=this.vertices.length,H=this.vertices,tt,nt,K,ut,dt,q,bt=0;bt<T;bt++){X.copy(H[bt]),L.vmult(X,X),O.vadd(X,X);var pt=X;pt.x<tt||tt===void 0?tt=pt.x:(pt.x>ut||ut===void 0)&&(ut=pt.x),pt.y<nt||nt===void 0?nt=pt.y:(pt.y>dt||dt===void 0)&&(dt=pt.y),pt.z<K||K===void 0?K=pt.z:(pt.z>q||q===void 0)&&(q=pt.z)}R.set(tt,nt,K),A.set(ut,dt,q)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.prototype.getAveragePointLocal=function(O){O=O||new s;for(var L=this.vertices.length,R=this.vertices,A=0;A<L;A++)O.vadd(R[A],O);return O.mult(1/L,O),O},h.prototype.transformAllPoints=function(O,L){var R=this.vertices.length,A=this.vertices;if(L){for(var T=0;T<R;T++){var H=A[T];L.vmult(H,H)}for(var T=0;T<this.faceNormals.length;T++){var H=this.faceNormals[T];L.vmult(H,H)}}if(O)for(var T=0;T<R;T++){var H=A[T];H.vadd(O,H)}};var st=new s,F=new s,U=new s;h.prototype.pointIsInside=function(O){var L=this.vertices.length,R=this.vertices,A=this.faces,T=this.faceNormals,H=null,tt=this.faces.length,nt=st;this.getAveragePointLocal(nt);for(var K=0;K<tt;K++){this.faces[K].length;var L=T[K],ut=R[A[K][0]],dt=F;O.vsub(ut,dt);var q=L.dot(dt),bt=U;nt.vsub(ut,bt);var pt=L.dot(bt);if(q<0&&pt>0||q>0&&pt<0)return!1}return H?1:-1},new s;var Z=new s,Y=new s;h.project=function(O,L,R,A,T){var H=O.vertices.length,tt=Z,nt=0,K=0,ut=Y,dt=O.vertices;ut.setZero(),o.vectorToLocalFrame(R,A,L,tt),o.pointToLocalFrame(R,A,ut,ut);var q=ut.dot(tt);K=nt=dt[0].dot(tt);for(var bt=1;bt<H;bt++){var pt=dt[bt].dot(tt);pt>nt&&(nt=pt),pt<K&&(K=pt)}if(K-=q,nt-=q,K>nt){var rt=K;K=nt,nt=rt}T[0]=nt,T[1]=K}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,a){n.exports=h;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function h(u,c,l,d){var p=d,v=[],g=[],m=[],f=[],_=[],x=Math.cos,y=Math.sin;v.push(new s(c*x(0),c*y(0),-l*.5)),f.push(0),v.push(new s(u*x(0),u*y(0),l*.5)),_.push(1);for(var M=0;M<p;M++){var C=2*Math.PI/p*(M+1),V=2*Math.PI/p*(M+.5);M<p-1?(v.push(new s(c*x(C),c*y(C),-l*.5)),f.push(2*M+2),v.push(new s(u*x(C),u*y(C),l*.5)),_.push(2*M+3),m.push([2*M+2,2*M+3,2*M+1,2*M])):m.push([0,1,2*M+1,2*M]),(p%2===1||M<p/2)&&g.push(new s(x(V),y(V),0))}m.push(_),g.push(new s(0,0,1));for(var N=[],M=0;M<f.length;M++)N.push(f[f.length-M-1]);m.push(N),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}h.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,a){var r=e("./Shape"),s=e("./ConvexPolyhedron"),o=e("../math/Vec3"),h=e("../utils/Utils");n.exports=u;function u(c,l){l=h.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=c,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new s,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}u.prototype=new r,u.prototype.update=function(){this._cachedPillars={}},u.prototype.updateMinValue=function(){for(var c=this.data,l=c[0][0],d=0;d!==c.length;d++)for(var p=0;p!==c[d].length;p++){var v=c[d][p];v<l&&(l=v)}this.minValue=l},u.prototype.updateMaxValue=function(){for(var c=this.data,l=c[0][0],d=0;d!==c.length;d++)for(var p=0;p!==c[d].length;p++){var v=c[d][p];v>l&&(l=v)}this.maxValue=l},u.prototype.setHeightValueAtIndex=function(c,l,d){var p=this.data;p[c][l]=d,this.clearCachedConvexTrianglePillar(c,l,!1),c>0&&(this.clearCachedConvexTrianglePillar(c-1,l,!0),this.clearCachedConvexTrianglePillar(c-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(c,l-1,!0),this.clearCachedConvexTrianglePillar(c,l-1,!1)),l>0&&c>0&&this.clearCachedConvexTrianglePillar(c-1,l-1,!0)},u.prototype.getRectMinMax=function(c,l,d,p,v){v=v||[];for(var g=this.data,m=this.minValue,f=c;f<=d;f++)for(var _=l;_<=p;_++){var x=g[f][_];x>m&&(m=x)}v[0]=this.minValue,v[1]=m},u.prototype.getIndexOfPosition=function(c,l,d,p){var v=this.elementSize,g=this.data,m=Math.floor(c/v),f=Math.floor(l/v);return d[0]=m,d[1]=f,p&&(m<0&&(m=0),f<0&&(f=0),m>=g.length-1&&(m=g.length-1),f>=g[0].length-1&&(f=g[0].length-1)),!(m<0||f<0||m>=g.length-1||f>=g[0].length-1)},u.prototype.getHeightAt=function(c,l,d){var p=[];this.getIndexOfPosition(c,l,p,d);var v=[];return this.getRectMinMax(p[0],p[1]+1,p[0],p[1]+1,v),(v[0]+v[1])/2},u.prototype.getCacheConvexTrianglePillarKey=function(c,l,d){return c+"_"+l+"_"+(d?1:0)},u.prototype.getCachedConvexTrianglePillar=function(c,l,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,l,d)]},u.prototype.setCachedConvexTrianglePillar=function(c,l,d,p,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,l,d)]={convex:p,offset:v}},u.prototype.clearCachedConvexTrianglePillar=function(c,l,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,l,d)]},u.prototype.getConvexTrianglePillar=function(c,l,d){var p=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(c,l,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}p=new s,v=new o,this.pillarConvex=p,this.pillarOffset=v}var g=this.data,m=this.elementSize,f=p.faces;p.vertices.length=6;for(var _=0;_<6;_++)p.vertices[_]||(p.vertices[_]=new o);f.length=5;for(var _=0;_<5;_++)f[_]||(f[_]=[]);var x=p.vertices,y=(Math.min(g[c][l],g[c+1][l],g[c][l+1],g[c+1][l+1])-this.minValue)/2+this.minValue;d?(v.set((c+.75)*m,(l+.75)*m,y),x[0].set(.25*m,.25*m,g[c+1][l+1]-y),x[1].set(-.75*m,.25*m,g[c][l+1]-y),x[2].set(.25*m,-.75*m,g[c+1][l]-y),x[3].set(.25*m,.25*m,-y-1),x[4].set(-.75*m,.25*m,-y-1),x[5].set(.25*m,-.75*m,-y-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=2,f[2][1]=5,f[2][2]=3,f[2][3]=0,f[3][0]=3,f[3][1]=4,f[3][2]=1,f[3][3]=0,f[4][0]=1,f[4][1]=4,f[4][2]=5,f[4][3]=2):(v.set((c+.25)*m,(l+.25)*m,y),x[0].set(-.25*m,-.25*m,g[c][l]-y),x[1].set(.75*m,-.25*m,g[c+1][l]-y),x[2].set(-.25*m,.75*m,g[c][l+1]-y),x[3].set(-.25*m,-.25*m,-y-1),x[4].set(.75*m,-.25*m,-y-1),x[5].set(-.25*m,.75*m,-y-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=0,f[2][1]=2,f[2][2]=5,f[2][3]=3,f[3][0]=1,f[3][1]=0,f[3][2]=3,f[3][3]=4,f[4][0]=4,f[4][1]=5,f[4][2]=2,f[4][3]=1),p.computeNormals(),p.computeEdges(),p.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(c,l,d,p,v)},u.prototype.calculateLocalInertia=function(c,l){return l=l||new o,l.set(0,0,0),l},u.prototype.volume=function(){return Number.MAX_VALUE},u.prototype.calculateWorldAABB=function(c,l,d,p){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),p.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},u.prototype.updateBoundingSphereRadius=function(){var c=this.data,l=this.elementSize;this.boundingSphereRadius=new o(c.length*l,c[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(h,u){return u=u||new s,u.set(0,0,0),u},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(h,u,c,l){c.copy(h),l.copy(h)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new s,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(u){var c=this.worldNormal;c.set(0,0,1),u.vmult(c,c),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(u,c){return c=c||new s,c},o.prototype.volume=function(){return Number.MAX_VALUE};var h=new s;o.prototype.calculateWorldAABB=function(u,c,l,d){h.set(0,0,1),c.vmult(h,h);var p=Number.MAX_VALUE;l.set(-p,-p,-p),d.set(p,p,p),h.x===1&&(d.x=u.x),h.y===1&&(d.y=u.y),h.z===1&&(d.z=u.z),h.x===-1&&(l.x=u.x),h.y===-1&&(l.y=u.y),h.z===-1&&(l.z=u.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,a){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(s,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(h){if(r.call(this),this.radius=h!==void 0?Number(h):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(h,u){u=u||new s;var c=2*h*this.radius*this.radius/5;return u.x=c,u.y=c,u.z=c,u},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(h,u,c,l){for(var d=this.radius,p=["x","y","z"],v=0;v<p.length;v++){var g=p[v];c[g]=h[g]-d,l[g]=h[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),h=e("../collision/AABB"),u=e("../utils/Octree");function c(N,E){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(N),this.indices=new Int16Array(E),this.normals=new Float32Array(E.length),this.aabb=new h,this.edges=null,this.scale=new s(1,1,1),this.tree=new u,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}c.prototype=new r,c.prototype.constructor=c;var l=new s;c.prototype.updateTree=function(){var N=this.tree;N.reset(),N.aabb.copy(this.aabb);var E=this.scale;N.aabb.lowerBound.x*=1/E.x,N.aabb.lowerBound.y*=1/E.y,N.aabb.lowerBound.z*=1/E.z,N.aabb.upperBound.x*=1/E.x,N.aabb.upperBound.y*=1/E.y,N.aabb.upperBound.z*=1/E.z;for(var S=new h,I=new s,W=new s,D=new s,k=[I,W,D],X=0;X<this.indices.length/3;X++){var st=X*3;this._getUnscaledVertex(this.indices[st],I),this._getUnscaledVertex(this.indices[st+1],W),this._getUnscaledVertex(this.indices[st+2],D),S.setFromPoints(k),N.insert(S,X)}N.removeEmptyNodes()};var d=new h;c.prototype.getTrianglesInAABB=function(N,E){d.copy(N);var S=this.scale,I=S.x,W=S.y,D=S.z,k=d.lowerBound,X=d.upperBound;return k.x/=I,k.y/=W,k.z/=D,X.x/=I,X.y/=W,X.z/=D,this.tree.aabbQuery(d,E)},c.prototype.setScale=function(N){var E=this.scale.x===this.scale.y===this.scale.z,S=N.x===N.y===N.z;E&&S||this.updateNormals(),this.scale.copy(N),this.updateAABB(),this.updateBoundingSphereRadius()},c.prototype.updateNormals=function(){for(var N=l,E=this.normals,S=0;S<this.indices.length/3;S++){var I=S*3,W=this.indices[I],D=this.indices[I+1],k=this.indices[I+2];this.getVertex(W,f),this.getVertex(D,_),this.getVertex(k,x),c.computeNormal(_,f,x,N),E[I]=N.x,E[I+1]=N.y,E[I+2]=N.z}},c.prototype.updateEdges=function(){for(var N={},E=function(st,F){var U=W<D?W+"_"+D:D+"_"+W;N[U]=!0},S=0;S<this.indices.length/3;S++){var I=S*3,W=this.indices[I],D=this.indices[I+1];this.indices[I+2],E(),E(),E()}var k=Object.keys(N);this.edges=new Int16Array(k.length*2);for(var S=0;S<k.length;S++){var X=k[S].split("_");this.edges[2*S]=parseInt(X[0],10),this.edges[2*S+1]=parseInt(X[1],10)}},c.prototype.getEdgeVertex=function(N,E,S){var I=this.edges[N*2+(E?1:0)];this.getVertex(I,S)};var p=new s,v=new s;c.prototype.getEdgeVector=function(N,E){var S=p,I=v;this.getEdgeVertex(N,0,S),this.getEdgeVertex(N,1,I),I.vsub(S,E)};var g=new s,m=new s;c.computeNormal=function(N,E,S,I){E.vsub(N,m),S.vsub(E,g),g.cross(m,I),I.isZero()||I.normalize()};var f=new s,_=new s,x=new s;c.prototype.getVertex=function(N,E){var S=this.scale;return this._getUnscaledVertex(N,E),E.x*=S.x,E.y*=S.y,E.z*=S.z,E},c.prototype._getUnscaledVertex=function(N,E){var S=N*3,I=this.vertices;return E.set(I[S],I[S+1],I[S+2])},c.prototype.getWorldVertex=function(N,E,S,I){return this.getVertex(N,I),o.pointToWorldFrame(E,S,I,I),I},c.prototype.getTriangleVertices=function(N,E,S,I){var W=N*3;this.getVertex(this.indices[W],E),this.getVertex(this.indices[W+1],S),this.getVertex(this.indices[W+2],I)},c.prototype.getNormal=function(N,E){var S=N*3;return E.set(this.normals[S],this.normals[S+1],this.normals[S+2])};var y=new h;c.prototype.calculateLocalInertia=function(N,E){this.computeLocalAABB(y);var S=y.upperBound.x-y.lowerBound.x,I=y.upperBound.y-y.lowerBound.y,W=y.upperBound.z-y.lowerBound.z;return E.set(1/12*N*(2*I*2*I+2*W*2*W),1/12*N*(2*S*2*S+2*W*2*W),1/12*N*(2*I*2*I+2*S*2*S))};var M=new s;c.prototype.computeLocalAABB=function(N){var E=N.lowerBound,S=N.upperBound,I=this.vertices.length;this.vertices;var W=M;this.getVertex(0,W),E.copy(W),S.copy(W);for(var D=0;D!==I;D++)this.getVertex(D,W),W.x<E.x?E.x=W.x:W.x>S.x&&(S.x=W.x),W.y<E.y?E.y=W.y:W.y>S.y&&(S.y=W.y),W.z<E.z?E.z=W.z:W.z>S.z&&(S.z=W.z)},c.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},c.prototype.updateBoundingSphereRadius=function(){for(var N=0,E=this.vertices,S=new s,I=0,W=E.length/3;I!==W;I++){this.getVertex(I,S);var D=S.norm2();D>N&&(N=D)}this.boundingSphereRadius=Math.sqrt(N)},new s;var C=new o,V=new h;c.prototype.calculateWorldAABB=function(N,E,S,I){var W=C,D=V;W.position=N,W.quaternion=E,this.aabb.toWorldFrame(W,D),S.copy(D.lowerBound),I.copy(D.upperBound)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.createTorus=function(N,E,S,I,W){N=N||1,E=E||.5,S=S||8,I=I||6,W=W||Math.PI*2;for(var D=[],k=[],X=0;X<=S;X++)for(var st=0;st<=I;st++){var F=st/I*W,U=X/S*Math.PI*2,Z=(N+E*Math.cos(U))*Math.cos(F),Y=(N+E*Math.cos(U))*Math.sin(F),O=E*Math.sin(U);D.push(Z,Y,O)}for(var X=1;X<=S;X++)for(var st=1;st<=I;st++){var L=(I+1)*X+st-1,R=(I+1)*(X-1)+st-1,A=(I+1)*(X-1)+st,T=(I+1)*X+st;k.push(L,R,T),k.push(R,A,T)}return new c(D,k)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,a){n.exports=s,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function s(){r.call(this),this.iterations=10,this.tolerance=1e-7}s.prototype=new r;var o=[],h=[],u=[];s.prototype.solve=function(c,l){var d=0,p=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,f=l.bodies,_=f.length,x=c,y,M,C,V,N,E;if(m!==0)for(var S=0;S!==_;S++)f[S].updateSolveMassProperties();var I=h,W=u,D=o;I.length=m,W.length=m,D.length=m;for(var S=0;S!==m;S++){var k=g[S];D[S]=0,W[S]=k.computeB(x),I[S]=1/k.computeC()}if(m!==0){for(var S=0;S!==_;S++){var X=f[S],st=X.vlambda,F=X.wlambda;st.set(0,0,0),F&&F.set(0,0,0)}for(d=0;d!==p;d++){V=0;for(var U=0;U!==m;U++){var k=g[U];y=W[U],M=I[U],E=D[U],N=k.computeGWlambda(),C=M*(y-N-k.eps*E),E+C<k.minForce?C=k.minForce-E:E+C>k.maxForce&&(C=k.maxForce-E),D[U]+=C,V+=C>0?C:-C,k.addToWlambda(C)}if(V*V<v)break}for(var S=0;S!==_;S++){var X=f[S],Z=X.velocity,Y=X.angularVelocity;Z.vadd(X.vlambda,Z),Y&&Y.vadd(X.wlambda,Y)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,a){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(s,o){return 0},r.prototype.addEquation=function(s){s.enabled&&this.equations.push(s)},r.prototype.removeEquation=function(s){var o=this.equations,h=o.indexOf(s);h!==-1&&o.splice(h,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,a){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),s=e("../objects/Body");function o(f){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=f,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var h=[],u=[],c={bodies:[]},l=s.STATIC;function d(f){for(var _=f.length,x=0;x!==_;x++){var y=f[x];if(!y.visited&&!(y.body.type&l))return y}return!1}var p=[];function v(f,_,x,y){for(p.push(f),f.visited=!0,_(f,x,y);p.length;)for(var M=p.pop(),C;C=d(M.children);)C.visited=!0,_(C,x,y),p.push(C)}function g(f,_,x){_.push(f.body);for(var y=f.eqs.length,M=0;M!==y;M++){var C=f.eqs[M];x.indexOf(C)===-1&&x.push(C)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(f,_){for(var x=h,y=this.nodePool,M=_.bodies,C=this.equations,V=C.length,N=M.length,E=this.subsolver;y.length<N;)y.push(this.createNode());x.length=N;for(var S=0;S<N;S++)x[S]=y[S];for(var S=0;S!==N;S++){var I=x[S];I.body=M[S],I.children.length=0,I.eqs.length=0,I.visited=!1}for(var W=0;W!==V;W++){var D=C[W],S=M.indexOf(D.bi),k=M.indexOf(D.bj),X=x[S],st=x[k];X.children.push(st),X.eqs.push(D),st.children.push(X),st.eqs.push(D)}var F,U=0,Z=u;E.tolerance=this.tolerance,E.iterations=this.iterations;for(var Y=c;F=d(x);){Z.length=0,Y.bodies.length=0,v(F,g,Y.bodies,Z);var O=Z.length;Z=Z.sort(m);for(var S=0;S!==O;S++)E.addEquation(Z[S]);E.solve(f,Y),E.removeAllEquations(),U++}return U};function m(f,_){return _.id-f.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,a){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(s,o){this._listeners===void 0&&(this._listeners={});var h=this._listeners;return h[s]===void 0&&(h[s]=[]),h[s].indexOf(o)===-1&&h[s].push(o),this},hasEventListener:function(s,o){if(this._listeners===void 0)return!1;var h=this._listeners;return h[s]!==void 0&&h[s].indexOf(o)!==-1},removeEventListener:function(s,o){if(this._listeners===void 0)return this;var h=this._listeners;if(h[s]===void 0)return this;var u=h[s].indexOf(o);return u!==-1&&h[s].splice(u,1),this},dispatchEvent:function(s){if(this._listeners===void 0)return this;var o=this._listeners,h=o[s.type];if(h!==void 0){s.target=this;for(var u=0,c=h.length;u<c;u++)h[u].call(this,s)}return this}}},{}],50:[function(e,n,a){var r=e("../collision/AABB"),s=e("../math/Vec3");n.exports=h;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new r,this.data=[],this.children=[]}function h(l,d){d=d||{},d.root=null,d.aabb=l,o.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}h.prototype=new o,o.prototype.reset=function(l,d){this.children.length=this.data.length=0},o.prototype.insert=function(l,d,p){var v=this.data;if(p=p||0,!this.aabb.contains(l))return!1;var g=this.children;if(p<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var f=0;f!==8;f++)if(g[f].insert(l,d,p+1))return!0;m&&(g.length=0)}return v.push(d),!0};var u=new s;o.prototype.subdivide=function(){var l=this.aabb,d=l.lowerBound,p=l.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new s(0,0,0)})}),new o({aabb:new r({lowerBound:new s(1,0,0)})}),new o({aabb:new r({lowerBound:new s(1,1,0)})}),new o({aabb:new r({lowerBound:new s(1,1,1)})}),new o({aabb:new r({lowerBound:new s(0,1,1)})}),new o({aabb:new r({lowerBound:new s(0,0,1)})}),new o({aabb:new r({lowerBound:new s(1,0,1)})}),new o({aabb:new r({lowerBound:new s(0,1,0)})})),p.vsub(d,u),u.scale(.5,u);for(var g=this.root||this,m=0;m!==8;m++){var f=v[m];f.root=g;var _=f.aabb.lowerBound;_.x*=u.x,_.y*=u.y,_.z*=u.z,_.vadd(d,_),_.vadd(u,f.aabb.upperBound)}},o.prototype.aabbQuery=function(l,d){this.data,this.children;for(var p=[this];p.length;){var v=p.pop();v.aabb.overlaps(l)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(p,v.children)}return d};var c=new r;o.prototype.rayQuery=function(l,d,p){return l.getAABB(c),c.toLocalFrame(d,c),this.aabbQuery(c,p),p},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var d=l.pop(),p=d.children.length-1;p>=0;p--)d.children[p].data.length||d.children.splice(p,1);Array.prototype.push.apply(l,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,a){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var s=arguments.length,o=0;o!==s;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,a){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(s,o){if(s>o){var h=o;o=s,s=h}return this.data[s+"-"+o]},r.prototype.set=function(s,o,h){if(s>o){var u=o;o=s,s=u}var c=s+"-"+o;this.get(s,o)||this.data.keys.push(c),this.data[c]=h},r.prototype.reset=function(){for(var s=this.data,o=s.keys;o.length>0;){var h=o.pop();delete s[h]}}},{}],53:[function(e,n,a){function r(){}n.exports=r,r.defaults=function(s,o){s=s||{};for(var h in o)h in s||(s[h]=o[h]);return s}},{}],54:[function(e,n,a){n.exports=o;var r=e("../math/Vec3"),s=e("./Pool");function o(){s.call(this),this.type=r}o.prototype=new s,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,a){n.exports=v;var r=e("../collision/AABB"),s=e("../shapes/Shape"),o=e("../collision/Ray"),h=e("../math/Vec3"),u=e("../math/Transform");e("../shapes/ConvexPolyhedron");var c=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),d=e("../equations/ContactEquation"),p=e("../equations/FrictionEquation");function v(ht){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=ht,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(ht,ft,_t,xt,Kt,It){var At;this.contactPointPool.length?(At=this.contactPointPool.pop(),At.bi=ht,At.bj=ft):At=new d(ht,ft),At.enabled=ht.collisionResponse&&ft.collisionResponse&&_t.collisionResponse&&xt.collisionResponse;var Lt=this.currentContactMaterial;At.restitution=Lt.restitution,At.setSpookParams(Lt.contactEquationStiffness,Lt.contactEquationRelaxation,this.world.dt);var it=_t.material||ht.material,Rt=xt.material||ft.material;return it&&Rt&&it.restitution>=0&&Rt.restitution>=0&&(At.restitution=it.restitution*Rt.restitution),At.si=Kt||_t,At.sj=It||xt,At},v.prototype.createFrictionEquationsFromContact=function(ht,ft){var _t=ht.bi,xt=ht.bj,Kt=ht.si,It=ht.sj,At=this.world,Lt=this.currentContactMaterial,it=Lt.friction,Rt=Kt.material||_t.material,Ut=It.material||xt.material;if(Rt&&Ut&&Rt.friction>=0&&Ut.friction>=0&&(it=Rt.friction*Ut.friction),it>0){var Wt=it*At.gravity.length(),w=_t.invMass+xt.invMass;w>0&&(w=1/w);var z=this.frictionEquationPool,j=z.length?z.pop():new p(_t,xt,Wt*w),G=z.length?z.pop():new p(_t,xt,Wt*w);return j.bi=G.bi=_t,j.bj=G.bj=xt,j.minForce=G.minForce=-Wt*w,j.maxForce=G.maxForce=Wt*w,j.ri.copy(ht.ri),j.rj.copy(ht.rj),G.ri.copy(ht.ri),G.rj.copy(ht.rj),ht.ni.tangents(j.t,G.t),j.setSpookParams(Lt.frictionEquationStiffness,Lt.frictionEquationRelaxation,At.dt),G.setSpookParams(Lt.frictionEquationStiffness,Lt.frictionEquationRelaxation,At.dt),j.enabled=G.enabled=ht.enabled,ft.push(j,G),!0}return!1};var g=new h,m=new h,f=new h;v.prototype.createFrictionFromAverage=function(ht){var ft=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ft,this.frictionResult)||ht===1)){var _t=this.frictionResult[this.frictionResult.length-2],xt=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),f.setZero();var Kt=ft.bi;ft.bj;for(var It=0;It!==ht;It++)ft=this.result[this.result.length-1-It],ft.bodyA!==Kt?(g.vadd(ft.ni,g),m.vadd(ft.ri,m),f.vadd(ft.rj,f)):(g.vsub(ft.ni,g),m.vadd(ft.rj,m),f.vadd(ft.ri,f));var At=1/ht;m.scale(At,_t.ri),f.scale(At,_t.rj),xt.ri.copy(_t.ri),xt.rj.copy(_t.rj),g.normalize(),g.tangents(_t.t,xt.t)}};var _=new h,x=new h,y=new c,M=new c;v.prototype.getContacts=function(ht,ft,_t,xt,Kt,It,At){this.contactPointPool=Kt,this.frictionEquationPool=At,this.result=xt,this.frictionResult=It;for(var Lt=y,it=M,Rt=_,Ut=x,Wt=0,w=ht.length;Wt!==w;Wt++){var z=ht[Wt],j=ft[Wt],G=null;z.material&&j.material&&(G=_t.getContactMaterial(z.material,j.material)||null);for(var J=0;J<z.shapes.length;J++){z.quaternion.mult(z.shapeOrientations[J],Lt),z.quaternion.vmult(z.shapeOffsets[J],Rt),Rt.vadd(z.position,Rt);for(var Q=z.shapes[J],St=0;St<j.shapes.length;St++){j.quaternion.mult(j.shapeOrientations[St],it),j.quaternion.vmult(j.shapeOffsets[St],Ut),Ut.vadd(j.position,Ut);var Ct=j.shapes[St];if(!(Rt.distanceTo(Ut)>Q.boundingSphereRadius+Ct.boundingSphereRadius)){var Xt=null;Q.material&&Ct.material&&(Xt=_t.getContactMaterial(Q.material,Ct.material)||null),this.currentContactMaterial=Xt||G||_t.defaultContactMaterial;var Bt=this[Q.type|Ct.type];Bt&&(Q.type<Ct.type?Bt.call(this,Q,Ct,Rt,Ut,Lt,it,z,j,Q,Ct):Bt.call(this,Ct,Q,Ut,Rt,it,Lt,j,z,Q,Ct))}}}}},v.prototype[s.types.BOX|s.types.BOX]=v.prototype.boxBox=function(ht,ft,_t,xt,Kt,It,At,Lt){ht.convexPolyhedronRepresentation.material=ht.material,ft.convexPolyhedronRepresentation.material=ft.material,ht.convexPolyhedronRepresentation.collisionResponse=ht.collisionResponse,ft.convexPolyhedronRepresentation.collisionResponse=ft.collisionResponse,this.convexConvex(ht.convexPolyhedronRepresentation,ft.convexPolyhedronRepresentation,_t,xt,Kt,It,At,Lt,ht,ft)},v.prototype[s.types.BOX|s.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(ht,ft,_t,xt,Kt,It,At,Lt){ht.convexPolyhedronRepresentation.material=ht.material,ht.convexPolyhedronRepresentation.collisionResponse=ht.collisionResponse,this.convexConvex(ht.convexPolyhedronRepresentation,ft,_t,xt,Kt,It,At,Lt,ht,ft)},v.prototype[s.types.BOX|s.types.PARTICLE]=v.prototype.boxParticle=function(ht,ft,_t,xt,Kt,It,At,Lt){ht.convexPolyhedronRepresentation.material=ht.material,ht.convexPolyhedronRepresentation.collisionResponse=ht.collisionResponse,this.convexParticle(ht.convexPolyhedronRepresentation,ft,_t,xt,Kt,It,At,Lt,ht,ft)},v.prototype[s.types.SPHERE]=v.prototype.sphereSphere=function(ht,ft,_t,xt,Kt,It,At,Lt){var it=this.createContactEquation(At,Lt,ht,ft);xt.vsub(_t,it.ni),it.ni.normalize(),it.ri.copy(it.ni),it.rj.copy(it.ni),it.ri.mult(ht.radius,it.ri),it.rj.mult(-ft.radius,it.rj),it.ri.vadd(_t,it.ri),it.ri.vsub(At.position,it.ri),it.rj.vadd(xt,it.rj),it.rj.vsub(Lt.position,it.rj),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)};var C=new h,V=new h,N=new h;v.prototype[s.types.PLANE|s.types.TRIMESH]=v.prototype.planeTrimesh=function(ht,ft,_t,xt,Kt,It,At,Lt){var it=new h,Rt=C;Rt.set(0,0,1),Kt.vmult(Rt,Rt);for(var Ut=0;Ut<ft.vertices.length/3;Ut++){ft.getVertex(Ut,it);var Wt=new h;Wt.copy(it),u.pointToWorldFrame(xt,It,Wt,it);var w=V;it.vsub(_t,w);var z=Rt.dot(w);if(z<=0){var j=this.createContactEquation(At,Lt,ht,ft);j.ni.copy(Rt);var G=N;Rt.scale(w.dot(Rt),G),it.vsub(G,G),j.ri.copy(G),j.ri.vsub(At.position,j.ri),j.rj.copy(it),j.rj.vsub(Lt.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}};var E=new h,S=new h;new h;var I=new h,W=new h,D=new h,k=new h,X=new h,st=new h,F=new h,U=new h,Z=new h,Y=new h,O=new h,L=new r,R=[];v.prototype[s.types.SPHERE|s.types.TRIMESH]=v.prototype.sphereTrimesh=function(ht,ft,_t,xt,Kt,It,At,Lt){var it=D,Rt=k,Ut=X,Wt=st,w=F,z=U,j=L,G=W,J=S,Q=R;u.pointToLocalFrame(xt,It,_t,w);var St=ht.radius;j.lowerBound.set(w.x-St,w.y-St,w.z-St),j.upperBound.set(w.x+St,w.y+St,w.z+St),ft.getTrianglesInAABB(j,Q);for(var Ct=I,Xt=ht.radius*ht.radius,Bt=0;Bt<Q.length;Bt++)for(var Nt=0;Nt<3;Nt++)if(ft.getVertex(ft.indices[Q[Bt]*3+Nt],Ct),Ct.vsub(w,J),J.norm2()<=Xt){G.copy(Ct),u.pointToWorldFrame(xt,It,G,Ct),Ct.vsub(_t,J);var wt=this.createContactEquation(At,Lt,ht,ft);wt.ni.copy(J),wt.ni.normalize(),wt.ri.copy(wt.ni),wt.ri.scale(ht.radius,wt.ri),wt.ri.vadd(_t,wt.ri),wt.ri.vsub(At.position,wt.ri),wt.rj.copy(Ct),wt.rj.vsub(Lt.position,wt.rj),this.result.push(wt),this.createFrictionEquationsFromContact(wt,this.frictionResult)}for(var Bt=0;Bt<Q.length;Bt++)for(var Nt=0;Nt<3;Nt++){ft.getVertex(ft.indices[Q[Bt]*3+Nt],it),ft.getVertex(ft.indices[Q[Bt]*3+(Nt+1)%3],Rt),Rt.vsub(it,Ut),w.vsub(Rt,z);var ae=z.dot(Ut);w.vsub(it,z);var ce=z.dot(Ut);if(ce>0&&ae<0){w.vsub(it,z),Wt.copy(Ut),Wt.normalize(),ce=z.dot(Wt),Wt.scale(ce,z),z.vadd(it,z);var me=z.distanceTo(w);if(me<ht.radius){var wt=this.createContactEquation(At,Lt,ht,ft);z.vsub(w,wt.ni),wt.ni.normalize(),wt.ni.scale(ht.radius,wt.ri),u.pointToWorldFrame(xt,It,z,z),z.vsub(Lt.position,wt.rj),u.vectorToWorldFrame(It,wt.ni,wt.ni),u.vectorToWorldFrame(It,wt.ri,wt.ri),this.result.push(wt),this.createFrictionEquationsFromContact(wt,this.frictionResult)}}}for(var Me=Z,le=Y,Yt=O,Ve=E,Bt=0,te=Q.length;Bt!==te;Bt++){ft.getTriangleVertices(Q[Bt],Me,le,Yt),ft.getNormal(Q[Bt],Ve),w.vsub(Me,z);var me=z.dot(Ve);if(Ve.scale(me,z),w.vsub(z,z),me=z.distanceTo(w),o.pointInTriangle(z,Me,le,Yt)&&me<ht.radius){var wt=this.createContactEquation(At,Lt,ht,ft);z.vsub(w,wt.ni),wt.ni.normalize(),wt.ni.scale(ht.radius,wt.ri),u.pointToWorldFrame(xt,It,z,z),z.vsub(Lt.position,wt.rj),u.vectorToWorldFrame(It,wt.ni,wt.ni),u.vectorToWorldFrame(It,wt.ri,wt.ri),this.result.push(wt),this.createFrictionEquationsFromContact(wt,this.frictionResult)}}Q.length=0};var A=new h,T=new h;v.prototype[s.types.SPHERE|s.types.PLANE]=v.prototype.spherePlane=function(ht,ft,_t,xt,Kt,It,At,Lt){var it=this.createContactEquation(At,Lt,ht,ft);if(it.ni.set(0,0,1),It.vmult(it.ni,it.ni),it.ni.negate(it.ni),it.ni.normalize(),it.ni.mult(ht.radius,it.ri),_t.vsub(xt,A),it.ni.mult(it.ni.dot(A),T),A.vsub(T,it.rj),-A.dot(it.ni)<=ht.radius){var Rt=it.ri,Ut=it.rj;Rt.vadd(_t,Rt),Rt.vsub(At.position,Rt),Ut.vadd(xt,Ut),Ut.vsub(Lt.position,Ut),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)}};var H=new h,tt=new h,nt=new h;function K(ht,ft,_t){for(var xt=null,Kt=ht.length,It=0;It!==Kt;It++){var At=ht[It],Lt=H;ht[(It+1)%Kt].vsub(At,Lt);var it=tt;Lt.cross(ft,it);var Rt=nt;_t.vsub(At,Rt);var Ut=it.dot(Rt);if(xt===null||Ut>0&&xt===!0||Ut<=0&&xt===!1){xt===null&&(xt=Ut>0);continue}else return!1}return!0}var ut=new h,dt=new h,q=new h,bt=new h,pt=[new h,new h,new h,new h,new h,new h],rt=new h,lt=new h,qt=new h,Tt=new h;v.prototype[s.types.SPHERE|s.types.BOX]=v.prototype.sphereBox=function(ht,ft,_t,xt,Kt,It,At,Lt){var it=this.v3pool,Rt=pt;_t.vsub(xt,ut),ft.getSideNormals(Rt,It);for(var Ut=ht.radius,Wt=!1,w=lt,z=qt,j=Tt,G=null,J=0,Q=0,St=0,Ct=null,Xt=0,Bt=Rt.length;Xt!==Bt&&Wt===!1;Xt++){var Nt=dt;Nt.copy(Rt[Xt]);var wt=Nt.norm();Nt.normalize();var ae=ut.dot(Nt);if(ae<wt+Ut&&ae>0){var ce=q,me=bt;ce.copy(Rt[(Xt+1)%3]),me.copy(Rt[(Xt+2)%3]);var Me=ce.norm(),le=me.norm();ce.normalize(),me.normalize();var Yt=ut.dot(ce),Ve=ut.dot(me);if(Yt<Me&&Yt>-Me&&Ve<le&&Ve>-le){var _e=Math.abs(ae-wt-Ut);(Ct===null||_e<Ct)&&(Ct=_e,Q=Yt,St=Ve,G=wt,w.copy(Nt),z.copy(ce),j.copy(me),J++)}}}if(J){Wt=!0;var Zt=this.createContactEquation(At,Lt,ht,ft);w.mult(-Ut,Zt.ri),Zt.ni.copy(w),Zt.ni.negate(Zt.ni),w.mult(G,w),z.mult(Q,z),w.vadd(z,w),j.mult(St,j),w.vadd(j,Zt.rj),Zt.ri.vadd(_t,Zt.ri),Zt.ri.vsub(At.position,Zt.ri),Zt.rj.vadd(xt,Zt.rj),Zt.rj.vsub(Lt.position,Zt.rj),this.result.push(Zt),this.createFrictionEquationsFromContact(Zt,this.frictionResult)}for(var te=it.get(),Te=rt,Re=0;Re!==2&&!Wt;Re++)for(var ge=0;ge!==2&&!Wt;ge++)for(var xe=0;xe!==2&&!Wt;xe++)if(te.set(0,0,0),Re?te.vadd(Rt[0],te):te.vsub(Rt[0],te),ge?te.vadd(Rt[1],te):te.vsub(Rt[1],te),xe?te.vadd(Rt[2],te):te.vsub(Rt[2],te),xt.vadd(te,Te),Te.vsub(_t,Te),Te.norm2()<Ut*Ut){Wt=!0;var Zt=this.createContactEquation(At,Lt,ht,ft);Zt.ri.copy(Te),Zt.ri.normalize(),Zt.ni.copy(Zt.ri),Zt.ri.mult(Ut,Zt.ri),Zt.rj.copy(te),Zt.ri.vadd(_t,Zt.ri),Zt.ri.vsub(At.position,Zt.ri),Zt.rj.vadd(xt,Zt.rj),Zt.rj.vsub(Lt.position,Zt.rj),this.result.push(Zt),this.createFrictionEquationsFromContact(Zt,this.frictionResult)}it.release(te),te=null;for(var ue=it.get(),Ce=it.get(),Zt=it.get(),pe=it.get(),_e=it.get(),hn=Rt.length,Re=0;Re!==hn&&!Wt;Re++)for(var ge=0;ge!==hn&&!Wt;ge++)if(Re%3!==ge%3){Rt[ge].cross(Rt[Re],ue),ue.normalize(),Rt[Re].vadd(Rt[ge],Ce),Zt.copy(_t),Zt.vsub(Ce,Zt),Zt.vsub(xt,Zt);var rn=Zt.dot(ue);ue.mult(rn,pe);for(var xe=0;xe===Re%3||xe===ge%3;)xe++;_e.copy(_t),_e.vsub(pe,_e),_e.vsub(Ce,_e),_e.vsub(xt,_e);var Do=Math.abs(rn),Uo=_e.norm();if(Do<Rt[xe].norm()&&Uo<Ut){Wt=!0;var ve=this.createContactEquation(At,Lt,ht,ft);Ce.vadd(pe,ve.rj),ve.rj.copy(ve.rj),_e.negate(ve.ni),ve.ni.normalize(),ve.ri.copy(ve.rj),ve.ri.vadd(xt,ve.ri),ve.ri.vsub(_t,ve.ri),ve.ri.normalize(),ve.ri.mult(Ut,ve.ri),ve.ri.vadd(_t,ve.ri),ve.ri.vsub(At.position,ve.ri),ve.rj.vadd(xt,ve.rj),ve.rj.vsub(Lt.position,ve.rj),this.result.push(ve),this.createFrictionEquationsFromContact(ve,this.frictionResult)}}it.release(ue,Ce,Zt,pe,_e)};var Vt=new h,Mt=new h,jt=new h,Jt=new h,P=new h,b=new h,et=new h,gt=new h,mt=new h,B=new h;v.prototype[s.types.SPHERE|s.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(ht,ft,_t,xt,Kt,It,At,Lt){var it=this.v3pool;_t.vsub(xt,Vt);for(var Rt=ft.faceNormals,Ut=ft.faces,Wt=ft.vertices,w=ht.radius,z=0;z!==Wt.length;z++){var j=Wt[z],G=P;It.vmult(j,G),xt.vadd(G,G);var J=Jt;if(G.vsub(_t,J),J.norm2()<w*w){St=!0;var Q=this.createContactEquation(At,Lt,ht,ft);Q.ri.copy(J),Q.ri.normalize(),Q.ni.copy(Q.ri),Q.ri.mult(w,Q.ri),G.vsub(xt,Q.rj),Q.ri.vadd(_t,Q.ri),Q.ri.vsub(At.position,Q.ri),Q.rj.vadd(xt,Q.rj),Q.rj.vsub(Lt.position,Q.rj),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult);return}}for(var St=!1,z=0,Ct=Ut.length;z!==Ct&&St===!1;z++){var Xt=Rt[z],Bt=Ut[z],Nt=b;It.vmult(Xt,Nt);var wt=et;It.vmult(Wt[Bt[0]],wt),wt.vadd(xt,wt);var ae=gt;Nt.mult(-w,ae),_t.vadd(ae,ae);var ce=mt;ae.vsub(wt,ce);var me=ce.dot(Nt),Me=B;if(_t.vsub(wt,Me),me<0&&Me.dot(Nt)>0){for(var le=[],Yt=0,Ve=Bt.length;Yt!==Ve;Yt++){var te=it.get();It.vmult(Wt[Bt[Yt]],te),xt.vadd(te,te),le.push(te)}if(K(le,Nt,_t)){St=!0;var Q=this.createContactEquation(At,Lt,ht,ft);Nt.mult(-w,Q.ri),Nt.negate(Q.ni);var Te=it.get();Nt.mult(-me,Te);var Re=it.get();Nt.mult(-w,Re),_t.vsub(xt,Q.rj),Q.rj.vadd(Re,Q.rj),Q.rj.vadd(Te,Q.rj),Q.rj.vadd(xt,Q.rj),Q.rj.vsub(Lt.position,Q.rj),Q.ri.vadd(_t,Q.ri),Q.ri.vsub(At.position,Q.ri),it.release(Te),it.release(Re),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult);for(var Yt=0,ge=le.length;Yt!==ge;Yt++)it.release(le[Yt]);return}else for(var Yt=0;Yt!==Bt.length;Yt++){var xe=it.get(),ue=it.get();It.vmult(Wt[Bt[(Yt+1)%Bt.length]],xe),It.vmult(Wt[Bt[(Yt+2)%Bt.length]],ue),xt.vadd(xe,xe),xt.vadd(ue,ue);var Ce=Mt;ue.vsub(xe,Ce);var Zt=jt;Ce.unit(Zt);var pe=it.get(),_e=it.get();_t.vsub(xe,_e);var hn=_e.dot(Zt);Zt.mult(hn,pe),pe.vadd(xe,pe);var rn=it.get();if(pe.vsub(_t,rn),hn>0&&hn*hn<Ce.norm2()&&rn.norm2()<w*w){var Q=this.createContactEquation(At,Lt,ht,ft);pe.vsub(xt,Q.rj),pe.vsub(_t,Q.ni),Q.ni.normalize(),Q.ni.mult(w,Q.ri),Q.rj.vadd(xt,Q.rj),Q.rj.vsub(Lt.position,Q.rj),Q.ri.vadd(_t,Q.ri),Q.ri.vsub(At.position,Q.ri),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult);for(var Yt=0,ge=le.length;Yt!==ge;Yt++)it.release(le[Yt]);it.release(xe),it.release(ue),it.release(pe),it.release(rn),it.release(_e);return}it.release(xe),it.release(ue),it.release(pe),it.release(rn),it.release(_e)}for(var Yt=0,ge=le.length;Yt!==ge;Yt++)it.release(le[Yt])}}},new h,new h,v.prototype[s.types.PLANE|s.types.BOX]=v.prototype.planeBox=function(ht,ft,_t,xt,Kt,It,At,Lt){ft.convexPolyhedronRepresentation.material=ft.material,ft.convexPolyhedronRepresentation.collisionResponse=ft.collisionResponse,this.planeConvex(ht,ft.convexPolyhedronRepresentation,_t,xt,Kt,It,At,Lt)};var vt=new h,yt=new h,ct=new h,Ot=new h;v.prototype[s.types.PLANE|s.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(ht,ft,_t,xt,Kt,It,At,Lt){var it=vt,Rt=yt;Rt.set(0,0,1),Kt.vmult(Rt,Rt);for(var Ut=0,Wt=ct,w=0;w!==ft.vertices.length;w++){it.copy(ft.vertices[w]),It.vmult(it,it),xt.vadd(it,it),it.vsub(_t,Wt);var z=Rt.dot(Wt);if(z<=0){var j=this.createContactEquation(At,Lt,ht,ft),G=Ot;Rt.mult(Rt.dot(Wt),G),it.vsub(G,G),G.vsub(_t,j.ri),j.ni.copy(Rt),it.vsub(xt,j.rj),j.ri.vadd(_t,j.ri),j.ri.vsub(At.position,j.ri),j.rj.vadd(xt,j.rj),j.rj.vsub(Lt.position,j.rj),this.result.push(j),Ut++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(j,this.frictionResult)}}this.enableFrictionReduction&&Ut&&this.createFrictionFromAverage(Ut)};var kt=new h,Ht=new h;v.prototype[s.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(ht,ft,_t,xt,Kt,It,At,Lt,it,Rt,Ut,Wt){var w=kt;if(!(_t.distanceTo(xt)>ht.boundingSphereRadius+ft.boundingSphereRadius)&&ht.findSeparatingAxis(ft,_t,Kt,xt,It,w,Ut,Wt)){var z=[],j=Ht;ht.clipAgainstHull(_t,Kt,ft,xt,It,w,-100,100,z);for(var G=0,J=0;J!==z.length;J++){var Q=this.createContactEquation(At,Lt,ht,ft,it,Rt),St=Q.ri,Ct=Q.rj;w.negate(Q.ni),z[J].normal.negate(j),j.mult(z[J].depth,j),z[J].point.vadd(j,St),Ct.copy(z[J].point),St.vsub(_t,St),Ct.vsub(xt,Ct),St.vadd(_t,St),St.vsub(At.position,St),Ct.vadd(xt,Ct),Ct.vsub(Lt.position,Ct),this.result.push(Q),G++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(Q,this.frictionResult)}this.enableFrictionReduction&&G&&this.createFrictionFromAverage(G)}};var Gt=new h,zt=new h,$t=new h;v.prototype[s.types.PLANE|s.types.PARTICLE]=v.prototype.planeParticle=function(ht,ft,_t,xt,Kt,It,At,Lt){var it=Gt;it.set(0,0,1),At.quaternion.vmult(it,it);var Rt=zt;xt.vsub(At.position,Rt);var Ut=it.dot(Rt);if(Ut<=0){var Wt=this.createContactEquation(Lt,At,ft,ht);Wt.ni.copy(it),Wt.ni.negate(Wt.ni),Wt.ri.set(0,0,0);var w=$t;it.mult(it.dot(xt),w),xt.vsub(w,w),Wt.rj.copy(w),this.result.push(Wt),this.createFrictionEquationsFromContact(Wt,this.frictionResult)}};var Qt=new h;v.prototype[s.types.PARTICLE|s.types.SPHERE]=v.prototype.sphereParticle=function(ht,ft,_t,xt,Kt,It,At,Lt){var it=Qt;it.set(0,0,1),xt.vsub(_t,it);var Rt=it.norm2();if(Rt<=ht.radius*ht.radius){var Ut=this.createContactEquation(Lt,At,ft,ht);it.normalize(),Ut.rj.copy(it),Ut.rj.mult(ht.radius,Ut.rj),Ut.ni.copy(it),Ut.ni.negate(Ut.ni),Ut.ri.set(0,0,0),this.result.push(Ut),this.createFrictionEquationsFromContact(Ut,this.frictionResult)}};var $=new c,Pt=new h;new h;var ot=new h,Et=new h,Dt=new h;v.prototype[s.types.PARTICLE|s.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(ht,ft,_t,xt,Kt,It,At,Lt){var it=-1,Rt=ot,Ut=Dt,Wt=null,w=Pt;if(w.copy(xt),w.vsub(_t,w),Kt.conjugate($),$.vmult(w,w),ht.pointIsInside(w)){ht.worldVerticesNeedsUpdate&&ht.computeWorldVertices(_t,Kt),ht.worldFaceNormalsNeedsUpdate&&ht.computeWorldFaceNormals(Kt);for(var z=0,j=ht.faces.length;z!==j;z++){var G=[ht.worldVertices[ht.faces[z][0]]],J=ht.worldFaceNormals[z];xt.vsub(G[0],Et);var Q=-J.dot(Et);(Wt===null||Math.abs(Q)<Math.abs(Wt))&&(Wt=Q,it=z,Rt.copy(J))}if(it!==-1){var St=this.createContactEquation(Lt,At,ft,ht);Rt.mult(Wt,Ut),Ut.vadd(xt,Ut),Ut.vsub(_t,Ut),St.rj.copy(Ut),Rt.negate(St.ni),St.ri.set(0,0,0);var Ct=St.ri,Xt=St.rj;Ct.vadd(xt,Ct),Ct.vsub(Lt.position,Ct),Xt.vadd(_t,Xt),Xt.vsub(At.position,Xt),this.result.push(St),this.createFrictionEquationsFromContact(St,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[s.types.BOX|s.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(ht,ft,_t,xt,Kt,It,At,Lt){ht.convexPolyhedronRepresentation.material=ht.material,ht.convexPolyhedronRepresentation.collisionResponse=ht.collisionResponse,this.convexHeightfield(ht.convexPolyhedronRepresentation,ft,_t,xt,Kt,It,At,Lt)};var ie=new h,he=new h,fe=[0];v.prototype[s.types.CONVEXPOLYHEDRON|s.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(ht,ft,_t,xt,Kt,It,At,Lt){var it=ft.data,Rt=ft.elementSize,Ut=ht.boundingSphereRadius,Wt=he,w=fe,z=ie;u.pointToLocalFrame(xt,It,_t,z);var j=Math.floor((z.x-Ut)/Rt)-1,G=Math.ceil((z.x+Ut)/Rt)+1,J=Math.floor((z.y-Ut)/Rt)-1,Q=Math.ceil((z.y+Ut)/Rt)+1;if(!(G<0||Q<0||j>it.length||J>it[0].length)){j<0&&(j=0),G<0&&(G=0),J<0&&(J=0),Q<0&&(Q=0),j>=it.length&&(j=it.length-1),G>=it.length&&(G=it.length-1),Q>=it[0].length&&(Q=it[0].length-1),J>=it[0].length&&(J=it[0].length-1);var St=[];ft.getRectMinMax(j,J,G,Q,St);var Ct=St[0],Xt=St[1];if(!(z.z-Ut>Xt||z.z+Ut<Ct))for(var Bt=j;Bt<G;Bt++)for(var Nt=J;Nt<Q;Nt++)ft.getConvexTrianglePillar(Bt,Nt,!1),u.pointToWorldFrame(xt,It,ft.pillarOffset,Wt),_t.distanceTo(Wt)<ft.pillarConvex.boundingSphereRadius+ht.boundingSphereRadius&&this.convexConvex(ht,ft.pillarConvex,_t,Wt,Kt,It,At,Lt,null,null,w,null),ft.getConvexTrianglePillar(Bt,Nt,!0),u.pointToWorldFrame(xt,It,ft.pillarOffset,Wt),_t.distanceTo(Wt)<ft.pillarConvex.boundingSphereRadius+ht.boundingSphereRadius&&this.convexConvex(ht,ft.pillarConvex,_t,Wt,Kt,It,At,Lt,null,null,w,null)}};var Fe=new h,ee=new h;v.prototype[s.types.SPHERE|s.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(ht,ft,_t,xt,Kt,It,At,Lt){var it=ft.data,Rt=ht.radius,Ut=ft.elementSize,Wt=ee,w=Fe;u.pointToLocalFrame(xt,It,_t,w);var z=Math.floor((w.x-Rt)/Ut)-1,j=Math.ceil((w.x+Rt)/Ut)+1,G=Math.floor((w.y-Rt)/Ut)-1,J=Math.ceil((w.y+Rt)/Ut)+1;if(!(j<0||J<0||z>it.length||J>it[0].length)){z<0&&(z=0),j<0&&(j=0),G<0&&(G=0),J<0&&(J=0),z>=it.length&&(z=it.length-1),j>=it.length&&(j=it.length-1),J>=it[0].length&&(J=it[0].length-1),G>=it[0].length&&(G=it[0].length-1);var Q=[];ft.getRectMinMax(z,G,j,J,Q);var St=Q[0],Ct=Q[1];if(!(w.z-Rt>Ct||w.z+Rt<St))for(var Xt=this.result,Bt=z;Bt<j;Bt++)for(var Nt=G;Nt<J;Nt++){var wt=Xt.length;ft.getConvexTrianglePillar(Bt,Nt,!1),u.pointToWorldFrame(xt,It,ft.pillarOffset,Wt),_t.distanceTo(Wt)<ft.pillarConvex.boundingSphereRadius+ht.boundingSphereRadius&&this.sphereConvex(ht,ft.pillarConvex,_t,Wt,Kt,It,At,Lt),ft.getConvexTrianglePillar(Bt,Nt,!0),u.pointToWorldFrame(xt,It,ft.pillarOffset,Wt),_t.distanceTo(Wt)<ft.pillarConvex.boundingSphereRadius+ht.boundingSphereRadius&&this.sphereConvex(ht,ft.pillarConvex,_t,Wt,Kt,It,At,Lt);var ae=Xt.length-wt;if(ae>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,a){n.exports=y;var r=e("../shapes/Shape"),s=e("../math/Vec3"),o=e("../math/Quaternion"),h=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var u=e("./Narrowphase"),c=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),d=e("../material/Material"),p=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),f=e("../collision/AABB"),_=e("../collision/Ray"),x=e("../collision/NaiveBroadphase");function y(){c.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new s,this.broadphase=new x,this.bodies=[],this.solver=new h,this.constraints=[],this.narrowphase=new u(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new p(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}y.prototype=new c,new f;var M=new _;if(y.prototype.getContactMaterial=function(U,Z){return this.contactMaterialTable.get(U.id,Z.id)},y.prototype.numObjects=function(){return this.bodies.length},y.prototype.collisionMatrixTick=function(){var U=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=U,this.collisionMatrix.reset()},y.prototype.add=y.prototype.addBody=function(U){this.bodies.indexOf(U)===-1&&(U.index=this.bodies.length,this.bodies.push(U),U.world=this,U.initPosition.copy(U.position),U.initVelocity.copy(U.velocity),U.timeLastSleepy=this.time,U instanceof v&&(U.initAngularVelocity.copy(U.angularVelocity),U.initQuaternion.copy(U.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=U,this.dispatchEvent(this.addBodyEvent))},y.prototype.addConstraint=function(U){this.constraints.push(U)},y.prototype.removeConstraint=function(U){var Z=this.constraints.indexOf(U);Z!==-1&&this.constraints.splice(Z,1)},y.prototype.rayTest=function(U,Z,Y){Y instanceof m?this.raycastClosest(U,Z,{skipBackfaces:!0},Y):this.raycastAll(U,Z,{skipBackfaces:!0},Y)},y.prototype.raycastAll=function(U,Z,Y,O){return Y.mode=_.ALL,Y.from=U,Y.to=Z,Y.callback=O,M.intersectWorld(this,Y)},y.prototype.raycastAny=function(U,Z,Y,O){return Y.mode=_.ANY,Y.from=U,Y.to=Z,Y.result=O,M.intersectWorld(this,Y)},y.prototype.raycastClosest=function(U,Z,Y,O){return Y.mode=_.CLOSEST,Y.from=U,Y.to=Z,Y.result=O,M.intersectWorld(this,Y)},y.prototype.remove=function(U){U.world=null;var Z=this.bodies.length-1,Y=this.bodies,O=Y.indexOf(U);if(O!==-1){Y.splice(O,1);for(var L=0;L!==Y.length;L++)Y[L].index=L;this.collisionMatrix.setNumObjects(Z),this.removeBodyEvent.body=U,this.dispatchEvent(this.removeBodyEvent)}},y.prototype.removeBody=y.prototype.remove,y.prototype.addMaterial=function(U){this.materials.push(U)},y.prototype.addContactMaterial=function(U){this.contactmaterials.push(U),this.contactMaterialTable.set(U.materials[0].id,U.materials[1].id,U)},typeof performance>"u"&&(performance={}),!performance.now){var C=Date.now();performance.timing&&performance.timing.navigationStart&&(C=performance.timing.navigationStart),performance.now=function(){return Date.now()-C}}var V=new s;y.prototype.step=function(U,Z,Y){if(Y=Y||10,Z=Z||0,Z===0)this.internalStep(U),this.time+=U;else{var O=Math.floor((this.time+Z)/U)-Math.floor(this.time/U);O=Math.min(O,Y);for(var L=performance.now(),R=0;R!==O&&(this.internalStep(U),!(performance.now()-L>U*1e3));R++);this.time+=Z;for(var A=this.time%U,T=A/U,H=V,tt=this.bodies,nt=0;nt!==tt.length;nt++){var K=tt[nt];K.type!==v.STATIC&&K.sleepState!==v.SLEEPING?(K.position.vsub(K.previousPosition,H),H.scale(T,H),K.position.vadd(H,K.interpolatedPosition)):(K.interpolatedPosition.copy(K.position),K.interpolatedQuaternion.copy(K.quaternion))}}};var N={type:"postStep"},E={type:"preStep"},S={type:"collide",body:null,contact:null},I=[],W=[],D=[],k=[];new s,new s,new s,new s,new s,new s,new s,new s,new s,new o;var X=new o,st=new o,F=new s;y.prototype.internalStep=function(U){this.dt=U;var Z=this.contacts,Y=D,O=k,L=this.numObjects(),R=this.bodies,A=this.solver,T=this.gravity,H=this.doProfiling,tt=this.profile,nt=v.DYNAMIC,K,ut=this.constraints,dt=W;T.norm();var q=T.x,bt=T.y,pt=T.z,rt=0;for(H&&(K=performance.now()),rt=0;rt!==L;rt++){var lt=R[rt];if(lt.type&nt){var qt=lt.force,Tt=lt.mass;qt.x+=Tt*q,qt.y+=Tt*bt,qt.z+=Tt*pt}}for(var rt=0,Vt=this.subsystems.length;rt!==Vt;rt++)this.subsystems[rt].update();H&&(K=performance.now()),Y.length=0,O.length=0,this.broadphase.collisionPairs(this,Y,O),H&&(tt.broadphase=performance.now()-K);var kt=ut.length;for(rt=0;rt!==kt;rt++){var Mt=ut[rt];if(!Mt.collideConnected)for(var jt=Y.length-1;jt>=0;jt-=1)(Mt.bodyA===Y[jt]&&Mt.bodyB===O[jt]||Mt.bodyB===Y[jt]&&Mt.bodyA===O[jt])&&(Y.splice(jt,1),O.splice(jt,1))}this.collisionMatrixTick(),H&&(K=performance.now());var Jt=I,P=Z.length;for(rt=0;rt!==P;rt++)Jt.push(Z[rt]);Z.length=0;var b=this.frictionEquations.length;for(rt=0;rt!==b;rt++)dt.push(this.frictionEquations[rt]);this.frictionEquations.length=0,this.narrowphase.getContacts(Y,O,this,Z,Jt,this.frictionEquations,dt),H&&(tt.narrowphase=performance.now()-K),H&&(K=performance.now());for(var rt=0;rt<this.frictionEquations.length;rt++)A.addEquation(this.frictionEquations[rt]);for(var et=Z.length,gt=0;gt!==et;gt++){var Mt=Z[gt],lt=Mt.bi,mt=Mt.bj;Mt.si,Mt.sj;var B;if(lt.material&&mt.material?B=this.getContactMaterial(lt.material,mt.material)||this.defaultContactMaterial:B=this.defaultContactMaterial,B.friction,lt.material&&mt.material&&(lt.material.friction>=0&&mt.material.friction>=0&&lt.material.friction*mt.material.friction,lt.material.restitution>=0&&mt.material.restitution>=0&&(Mt.restitution=lt.material.restitution*mt.material.restitution)),A.addEquation(Mt),lt.allowSleep&&lt.type===v.DYNAMIC&&lt.sleepState===v.SLEEPING&&mt.sleepState===v.AWAKE&&mt.type!==v.STATIC){var vt=mt.velocity.norm2()+mt.angularVelocity.norm2(),yt=Math.pow(mt.sleepSpeedLimit,2);vt>=yt*2&&(lt._wakeUpAfterNarrowphase=!0)}if(mt.allowSleep&&mt.type===v.DYNAMIC&&mt.sleepState===v.SLEEPING&&lt.sleepState===v.AWAKE&&lt.type!==v.STATIC){var ct=lt.velocity.norm2()+lt.angularVelocity.norm2(),Ot=Math.pow(lt.sleepSpeedLimit,2);ct>=Ot*2&&(mt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(lt,mt,!0),this.collisionMatrixPrevious.get(lt,mt)||(S.body=mt,S.contact=Mt,lt.dispatchEvent(S),S.body=lt,mt.dispatchEvent(S))}for(H&&(tt.makeContactConstraints=performance.now()-K,K=performance.now()),rt=0;rt!==L;rt++){var lt=R[rt];lt._wakeUpAfterNarrowphase&&(lt.wakeUp(),lt._wakeUpAfterNarrowphase=!1)}var kt=ut.length;for(rt=0;rt!==kt;rt++){var Mt=ut[rt];Mt.update();for(var jt=0,Ht=Mt.equations.length;jt!==Ht;jt++){var Gt=Mt.equations[jt];A.addEquation(Gt)}}A.solve(U,this),H&&(tt.solve=performance.now()-K),A.removeAllEquations();var zt=Math.pow;for(rt=0;rt!==L;rt++){var lt=R[rt];if(lt.type&nt){var $t=zt(1-lt.linearDamping,U),Qt=lt.velocity;Qt.mult($t,Qt);var $=lt.angularVelocity;if($){var Pt=zt(1-lt.angularDamping,U);$.mult(Pt,$)}}}for(this.dispatchEvent(E),rt=0;rt!==L;rt++){var lt=R[rt];lt.preStep&&lt.preStep.call(lt)}H&&(K=performance.now());var ot=X,Et=st,Dt=this.stepnumber,ie=v.DYNAMIC|v.KINEMATIC,he=Dt%(this.quatNormalizeSkip+1)===0,fe=this.quatNormalizeFast,Fe=U*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,rt=0;rt!==L;rt++){var ee=R[rt],ht=ee.force,ft=ee.torque;if(ee.type&ie&&ee.sleepState!==v.SLEEPING){var _t=ee.velocity,xt=ee.angularVelocity,Kt=ee.position,It=ee.quaternion,At=ee.invMass,Lt=ee.invInertiaWorld;_t.x+=ht.x*At*U,_t.y+=ht.y*At*U,_t.z+=ht.z*At*U,ee.angularVelocity&&(Lt.vmult(ft,F),F.mult(U,F),F.vadd(xt,xt)),Kt.x+=_t.x*U,Kt.y+=_t.y*U,Kt.z+=_t.z*U,ee.angularVelocity&&(ot.set(xt.x,xt.y,xt.z,0),ot.mult(It,Et),It.x+=Fe*Et.x,It.y+=Fe*Et.y,It.z+=Fe*Et.z,It.w+=Fe*Et.w,he&&(fe?It.normalizeFast():It.normalize())),ee.aabb&&(ee.aabbNeedsUpdate=!0),ee.updateInertiaWorld&&ee.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,H&&(tt.integrate=performance.now()-K),this.time+=U,this.stepnumber+=1,this.dispatchEvent(N),rt=0;rt!==L;rt++){var lt=R[rt],it=lt.postStep;it&&it.call(lt)}if(this.allowSleep)for(rt=0;rt!==L;rt++)R[rt].sleepTick(this.time)},y.prototype.clearForces=function(){for(var U=this.bodies,Z=U.length,Y=0;Y!==Z;Y++){var O=U[Y];O.force,O.torque,O.force.set(0,0,0),O.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(To);var op=To.exports;const Be=ap(op);Xe.enabled=!1;const vs=new ms,wi={};wi.createSphere=()=>{Lo(Math.random()*.5,{x:(Math.random()-.5)*3,y:3,z:(Math.random()-.5)*3})};wi.createBox=()=>{mp(Math.random()*.5,Math.random()*.5,Math.random()*.5,{x:(Math.random()-.5)*3,y:3,z:(Math.random()-.5)*3})};wi.reset=()=>{for(const i of mr)i.body.removeEventListener("collide",_s),nn.removeBody(i.body),Dn.remove(i.mesh)};vs.add(wi,"createSphere");vs.add(wi,"createBox");vs.add(wi,"reset");const Ro=document.querySelector("canvas.webgl"),Dn=new Bf;new Hf;const lp=new Vf,gs=lp.load(["/textures/environmentMaps/0/px.png","/textures/environmentMaps/0/nx.png","/textures/environmentMaps/0/py.png","/textures/environmentMaps/0/ny.png","/textures/environmentMaps/0/pz.png","/textures/environmentMaps/0/nz.png"]),jr=new Audio("/sounds/hit.mp3"),_s=i=>{const t=i.contact.getImpactVelocityAlongNormal();console.log(i.contact.getImpactVelocityAlongNormal()),t>1.5&&(jr.volume=Math.random(),jr.currentTime=0,jr.play())},nn=new Be.World;nn.broadphase=new Be.SAPBroadphase(nn);nn.allowSleep=!0;nn.gravity.set(0,-9.82,0);const cr=new Be.Material("default"),Co=new Be.ContactMaterial(cr,cr,{friction:.1,restitution:.7});nn.addContactMaterial(Co);nn.defaultContactMaterial=Co;const cp=new Be.Plane,pr=new Be.Body;pr.mass=0;pr.addShape(cp);pr.quaternion.setFromAxisAngle(new Be.Vec3(-1,0,0),Math.PI*.5);nn.addBody(pr);const xs=new tn(new dr(10,10),new fs({color:"#777777",metalness:.3,roughness:.4,envMap:gs,envMapIntensity:.5}));xs.receiveShadow=!0;xs.rotation.x=-Math.PI*.5;Dn.add(xs);const hp=new Xf(16777215,.7);Dn.add(hp);const Mn=new kf(16777215,.2);Mn.castShadow=!0;Mn.shadow.mapSize.set(1024,1024);Mn.shadow.camera.far=15;Mn.shadow.camera.left=-7;Mn.shadow.camera.top=7;Mn.shadow.camera.right=7;Mn.shadow.camera.bottom=-7;Mn.position.set(5,5,5);Dn.add(Mn);const an={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{an.width=window.innerWidth,an.height=window.innerHeight,Mi.aspect=an.width/an.height,Mi.updateProjectionMatrix(),Ln.setSize(an.width,an.height),Ln.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Mi=new Ye(75,an.width/an.height,.1,100);Mi.position.set(-3,3,3);Dn.add(Mi);const Po=new Yf(Mi,Ro);Po.enableDamping=!0;const Ln=new wo({canvas:Ro});Ln.outputColorSpace=en;Ln.shadowMap.enabled=!0;Ln.shadowMap.type=qa;Ln.setSize(an.width,an.height);Ln.setPixelRatio(Math.min(window.devicePixelRatio,2));const mr=[],up=new ds(1,20,20),dp=new fs({metalness:.3,roughness:.4,envMap:gs}),Lo=(i,t)=>{const e=new tn(up,dp);e.scale.set(i,i,i),e.castShadow=!0,e.position.copy(t),Dn.add(e);const n=new Be.Sphere(i),a=new Be.Body({mass:1,position:new Be.Vec3(0,3,0),shape:n,material:cr});a.position.copy(t),a.addEventListener("collide",_s),nn.addBody(a),mr.push({mesh:e,body:a})};Lo(.5,{x:0,y:3,z:0});const fp=new Ei(1,1,1),pp=new fs({metalness:.3,roughness:.4,envMap:gs}),mp=(i,t,e,n)=>{const a=new tn(fp,pp);a.scale.set(i,t,e),a.castShadow=!0,a.position.copy(n),Dn.add(a);const r=new Be.Box(new Be.Vec3(i*.5,t*.5,e*.5)),s=new Be.Body({mass:1,position:new Be.Vec3(0,3,0),shape:r,material:cr});s.position.copy(n),s.addEventListener("collide",_s),nn.addBody(s),mr.push({mesh:a,body:s})},vp=new qf;let ka=0;const Io=()=>{const i=vp.getElapsedTime(),t=i-ka;ka=i,nn.step(1/60,t,3);for(const e of mr)e.mesh.position.copy(e.body.position),e.mesh.quaternion.copy(e.body.quaternion);Po.update(),Ln.render(Dn,Mi),window.requestAnimationFrame(Io)};Io();
//# sourceMappingURL=index-255d0b22.js.map
