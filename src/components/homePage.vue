<template>
	<div>
		
		<v-container id='preview' v-show='!grError'>
		<v-layout wrap justify-space-around >
			<div>
				<!-- title -->
				<p class="title text-xs-center grey--text">Vibrant Gradient from image</p>
				<v-layout justify-center>

				<!-- image tile -->
				<div>
					<img class='elevation-4' style="height: 100px; width:100px; border-radius: 10px;" :src="imgUrl"/>
						<p class="body-2 text-xs-center">Given Image</p>
					</div>

				<!-- icon tile -->
				<div style="height: 100px; width: 100px;">
					<v-icon style='font-size: 100px;'>arrow_right_alt</v-icon>
				</div>

				<!-- gradiant tile -->
				<div>
					<v-card class='elevation-4' :style="`border-radius:10px; height:100px; width:100px; background:linear-gradient(${vibrantGr});`">
					</v-card>
					<p class="body-2 text-xs-center" style='margin-top:7px;'>Gradiant</p>
				</div>

				</v-layout>
			</div>

			<div>
				<!-- title -->
				<p class="title text-xs-center grey--text">Relevent Gradient from image</p>
				<v-layout justify-center>

				<!-- image tile -->
				<div>
					<img class='elevation-4' style="height: 100px; width:100px; border-radius: 10px;" :src="imgUrl"/>
						<p class="body-2 text-xs-center">Given Image</p>
					</div>

				<!-- icon tile -->
				<div style="height: 100px; width: 100px;">
					<v-icon style='font-size: 100px;'>arrow_right_alt</v-icon>
				</div>

				<!-- gradiant tile -->
				<div>
					<v-card class='elevation-4' :style="`border-radius:10px; height:100px; width:100px; background:linear-gradient(${releventGr});`">
					</v-card>
					<p class="body-2 text-xs-center" style='margin-top:7px;'>Gradiant</p>
				</div>

				</v-layout>
			</div>
		</v-layout>
			<v-layout wrap justify-space-around>
				  	<!-- vibrant card -->
					<v-flex xs12 sm6 md4  style='padding:10px;'>
					  	<div>
					  		<p class="text-xs-center title">Vibrant Gradient</p>
					  		<v-card :style='`border-radius:10px; width background:linear-gradient(${vibrantGr});`' >
					          <v-card-media  :src="imgUrl" height="200px" class='elevation-8' style='border-radius:10px; '>
					          </v-card-media>
					          <div :style='`background:linear-gradient(${vibrantGr}); margin-top:-10px;`'>
					  	        <v-card-title primary-title>
					  	          <div>
					  	            <h3 class="headline mb-0" :style="`color:${textClr};`">This is a Vibrant Gradient</h3>
					  	            <div :style="`color:${textClr};`">This gradiant is genrated from most vibrant color from the image</div>
					  	          </div>
					  	        </v-card-title>

					  	        <v-card-actions>
					  	        	<v-btn flat color="orange" :style="`color:${textClr2} !important;`">See api refrence code</v-btn>
					  	        </v-card-actions>
					      	</div>
					        </v-card>
				    	</div>
					</v-flex>



					<!-- relevent card -->
					<v-flex xs12 sm6 md4  style='padding:10px;'>

					  	<div>
					  		<p class="text-xs-center title">Relevent Gradient</p>
					  		<v-card :style='`border-radius:10px; width background:linear-gradient(${releventGr});`' >
					          <v-card-media  :src="imgUrl" height="200px" class='elevation-8' style='border-radius:10px; '>
					          </v-card-media>
					          <div :style='`background:linear-gradient(${releventGr}); margin-top:-10px;`'>
					  	        <v-card-title primary-title>
					  	          <div>
					  	            <h3 class="headline mb-0" :style="`color:${relTextClr};`">This is a Relevent Gradient</h3>
					  	            <div :style="`color:${relTextClr};`">This gradiant is genrated from most relevent color from the image</div>
					  	          </div>
					  	        </v-card-title>
					  	        <v-card-actions>
					  	          <v-btn flat color="orange" :style="`color:${relTextClr2} !important;`">See api refrence code</v-btn>
					  	        </v-card-actions>
					      	</div>
					        </v-card>
				    	</div>
					</v-flex>

			</v-layout>
			<v-container>
			<p class="grey--text text-xs-center">*sometime <strong>Vibrant Gradient</strong> and <strong>Relevent Gradient</strong> can be <strong>similar</strong>. </p>
		</v-container>
	    </v-container>

		<div>
			<p class="text-xs-center title">Install with npm </p>
			<v-layout justify-center>

				<v-container>
					<div class="grey lighten-3" style="border-radius: 2px;">
					<v-container>
					<p class="text-xs-center title " style="margin: auto;"><code class="elevation-0 transparent">npm install gradient-from-image --save</code></p>
					</v-container>
					</div>
					<br>
			  <pre><p class="body-2">basic usage</p></pre>
			  	<div>
			  		<v-card style='background:#282828 !important;'>

						<p class="grey--text text-xs-right" style='padding: 15px; margin: auto;'>html</p>


					<div v-highlight style="margin-top: -35px;">
					  <pre><code class="">{{htmlCode}}</code></pre>
					</div>
				</v-card>
				<br>

					<v-card id='gr(url)' style='background:#282828 !important;'>

						<p class="grey--text text-xs-right" style='padding: 15px; margin: auto;'>javascript</p>


					<div  v-highlight style="margin-top: -35px;">
					  <pre>
					  <code class="javascript">{{javascriptCode}}</code></pre>
					</div>

				</v-card>
				</div>
				<br>

				<pre><p class="body-2">Get a contrast Taxt color</p></pre>
				<v-card id="getTextClr(Hex)" style='background:#282828 !important;'>
						<p class="grey--text text-xs-right" style='padding: 15px; margin: auto;'>javascript</p>
					<div v-highlight style="margin-top: -35px;">
					  <pre>
					  <code class="javascript">{{javascriptCode_text}}</code></pre>
					</div>

				</v-card>
				<br>
				<pre>Get solid color palates</pre>
				<v-card id="solid(url)" style='background:#282828 !important;'>
						<p class="grey--text text-xs-right" style='padding: 15px; margin: auto;'>javascript</p>
					<div v-highlight style="margin-top: -35px;">
					  <pre>
					  <code class="javascript">{{javascriptCode_solid}}</code></pre>
					</div>

				</v-card>

				</v-container>

			</v-layout>
		</div>

		<!-- try it now -->
		<v-container>
		<v-card style='background: linear-gradient(to bottom, #abbaab, #ffffff) !important;'>
		<v-container>
		<v-container>
			<p class="title text-xs-center ">Try <strong>gradient-from-image</strong> now!</p>
		</v-container>
			<v-text-field append-icon='clear' :append-icon-cb='testUrlClear' v-model="testUrl" solo label="paste image URL here..."></v-text-field>

			<v-btn v-show='!tryBox' @click='rendomImg' style='background: linear-gradient(to right, #ff512f, #dd2476)!important;' class='white--text' block round> genrate random Image</v-btn>

			<v-container v-show='tryBox' style='position: relative;' >
				<div v-show='!tryImgErr'>

				<v-layout justify-center>
					<img id='tryImg' :src='testUrl' @error='tryImgErrFunc' class="elevation-4" style='height:300px; border-radius: 10px;'/>
				</v-layout>
				<p class='text-xs-center'><v-icon class='green--text' style='font-size: 50px;'>done</v-icon></p>
				<p class='text-xs-center title ' >Your preview is ready</p>
				<v-btn round block @click='inView("preview")' class='white--text' style='background: linear-gradient(to right, #ff512f, #dd2476)!important;'> Click here to see preview</v-btn>

				</div>


				<div v-show='tryImgErr'>
					<p class='text-xs-center'><v-icon class='red--text' style='font-size: 50px;'>warning</v-icon></p>
					<p class='text-xs-center title ' >Image URL is not valid try with another URL</p>
					<p class="text-xs-center title " >blocked by CORS policy or invalid url</p>
				</div>
			</v-container>
		</v-container>
		</v-card>
		</v-container>




		<v-container>
			<p class=' text-xs-center title'><strong>Api</strong> reference</p>
		<v-card style='background: linear-gradient(to bottom, #abbaab, #ffffff) !important;'>
			<div style="padding:10px;">
			<v-card class='grey lighten-4'>
				<v-layout row >

					<div style="padding: 5px; width:200px;">
						<span class="grey--text caption">name</span>
						<p class="body-2" style="font-family: monospace; color:rgb(189, 65, 71);"><strong>gr(url)</strong></p>
					</div>

					<div style="padding: 5px; right:0px;">
						<span class="grey--text caption ">argument type</span>
						<p class="body-2" style="font-family: monospace; "><strong>String</strong></p>
					</div>

					<v-spacer></v-spacer>

					<div style="padding: 5px;">
						<p class="grey--text caption text-xs-right" style="margin:auto;">return</p>
						<p class="body-2" style="font-family: monospace;"><strong>All available gradients</strong></p>
					</div>
					

				</v-layout>
				<div class="grey lighten-3" style="padding: 5px;">
					<p class="body-1" style="margin:auto; color: #616161;">this function require path of the image or URL as a first argument see full example <a @click='inView("gr(url)")'>here.</a></p>
				</div>
			</v-card>
			<br>
			<v-card class='grey lighten-4'>
				<v-layout row >
					<div style="padding: 5px; width:200px;">
						<span class="grey--text caption">name</span>
						<p class="body-2" style="font-family: monospace; color:rgb(189, 65, 71);"><strong>getTextClr(Hex)</strong></p>
					</div>

					<div style="padding: 5px; right:0px;">
						<span class="grey--text caption ">argument type</span>
						<p class="body-2" style="font-family: monospace; "><strong>String</strong></p>
					</div>

					<v-spacer></v-spacer>
					<div style="padding: 5px;">
						<p class="grey--text caption text-xs-right" style="margin:auto;">return</p>
						<p class="body-2" style="font-family: monospace;"><strong>Contrast text color based on the image</strong></p>
					</div>

				</v-layout>
				<div class="grey lighten-3" style="padding: 5px;">
					<p class="body-1" style="margin:auto; color: #616161;">this function require Hex color as a first argument see full example <a @click='inView("getTextClr(Hex)")'>here.</a></p>
				</div>
			</v-card>	
			<br>
			<v-card class='grey lighten-4'>
				<v-layout row >
					<div style="padding: 5px; width:200px;">
						<span class="grey--text caption">name</span>
						<p class="body-2" style="font-family: monospace; color:rgb(189, 65, 71);"><strong>solid(url)</strong></p>
					</div>

					<div style="padding: 5px; right:0px;">
						<span class="grey--text caption ">argument type</span>
						<p class="body-2" style="font-family: monospace; "><strong>String</strong></p>
					</div>

					<v-spacer></v-spacer>
					<div style="padding: 5px;">
						<p class="grey--text caption text-xs-right" style="margin:auto;">return</p>
						<p class="body-2" style="font-family: monospace;"><strong>Solid color palates based on the image</strong></p>
					</div>

				</v-layout>
				<div class="grey lighten-3" style="padding: 5px;">
					<p class="body-1" style="margin:auto; color: #616161;">this function require path of the image or URL as a first argument see full example <a @click='inView("solid(url)")' >here.</a></p>
				</div>
			</v-card>
			<br>
			<v-card class='grey lighten-4'>
				<v-layout row >
					<div style="padding: 5px; width:200px;">
						<span class="grey--text caption">name</span>
						<p class="body-2" style="font-family: monospace; color:rgb(189, 65, 71);"><strong>Vibrant</strong></p>
					</div>

					<div style="padding: 5px; right:0px;">
						<span class="grey--text caption ">type</span>
						<p class="body-2" style="font-family: monospace; "><strong>Library</strong></p>
					</div>

					<v-spacer></v-spacer>
					<div style="padding: 5px;">
						<p class="grey--text caption text-xs-right" style="margin:auto;">return</p>
						<p class="body-2" style="font-family: monospace;"><strong>Native node-vibrant library</strong></p>
					</div>

				</v-layout>
				<div class="grey lighten-3" style="padding: 5px;">
					<p class="body-1" style="margin:auto; color: #616161;">Can acess native functions of <strong>vibrant js</strong> see full documentation <a @click='href("https://github.com/akfish/node-vibrant/")' >here.</a></p>
				</div>
			</v-card>
			</div>


				<v-btn @click='href("https://github.com/kartik1225/gradient-from-image")' block flat>see this project on github></v-btn>


		</v-card>	
		</v-container>

		<div>
			<v-container>
				<p class="title text-xs-center"><strong>technology</strong> used</p>

				<v-container>
				  
				<v-layout row wrap justify-space-between>
					<template v-for='credit in credits'>
						<v-btn @click='href(credit.link)' class='white--text' round style="background: linear-gradient(to right, #ff512f, #dd2476) !important; font-family: monospace; font-size: 20px; font-weight: 1000;">{{credit.title}}</v-btn>
					</template>
				</v-layout>
				</v-container>

			</v-container>
		</div>

	</div>
</template>

<script>
import grad from 'gradient-from-image'

export default{
	data(){
		return{
			imgUrl:`https://picsum.photos/600/600?image=39`,
			vibrantGr:[],
			releventGr:[],
			palattes:[],
			pop:null,
			textClr:null,
			textClr2:null,
			relTextClr:null,
			relTextClr2:null,
			htmlCode:null,
			javascriptCode:null,
			javascriptCode_text:null,
			javascriptCode_solid:null,
			testUrl:null,
			tryBox:false,
			tryImgLoading:false,
			tryImgErr:false,
			grError:false,
			credits:[{title:"uiGradients",link:"https://github.com/Ghosh/uiGradients"},
					 {title:"pick-a-good-color",link:"https://github.com/colorjs/pick-a-good-color"},
					 {title:"node-vibrant",link:"https://github.com/akfish/node-vibrant"}
			]
		}
	},
	watch:{
		testUrl(){
			this.imgLoad();
		}
	},
	methods:{
		getGradiant(){
			grad.gr(this.imgUrl).then(gr=>{
				if(!gr.error){
					this.grError = false; 
					// for vibrant gradiant
					this.vibrantGr = gr.vibrant;
					this.textClr = gr.getTextClr(gr.vibrant[0]);
					this.textClr2 = gr.getTextClr(gr.vibrant[gr.vibrant.length - 1]);

					console.log(gr.vibrant[0])
					// for relevent gradiant
					this.releventGr = gr.relevent;
					this.relTextClr = gr.getTextClr(gr.relevent[0])
					this.relTextClr2 = gr.getTextClr(gr.relevent[gr.relevent.length - 1]);
				}else{
					this.grError = true; 
					this.tryImgErrFunc();
				}

				console.log(gr);

			}) 
		},
		inView(id){
			let elmnt = document.getElementById(id);
			    elmnt.scrollIntoView({behavior:"smooth"});

			    elmnt.style.border = "solid";
			    elmnt.style.borderColor = "#f44336"

			    setTimeout(()=>{
			    	elmnt.style.border = "none";
			    },3000)
		},
		href(url){
			window.location = url
		},
		imgLoad(){
			this.tryBox = true;
			this.tryImgErr = false;
			this.imgUrl = this.testUrl;

			this.getGradiant();

		},
		tryImgErrFunc(){

			this.tryImgErr = true;
			this.imgUrl = `https://picsum.photos/600/600?image=${Math.floor((Math.random() * 700) + 1)}`
			this.getGradiant();
			console.log('ohooooo..')
		},
		rendomImg(){
			let url = `https://picsum.photos/600/600?${Math.floor((Math.random() * 200) + 1)}`
			this.testUrl = url
		},
		testUrlClear(){
			this.testUrl = null;
			setTimeout(()=>{

			this.tryBox = false;
			},1000)
		}
	},
	created(){
		this.getGradiant();
		this.htmlCode = `<body>
	<div class='example' style='height:100px;width:100px;'></div>
 </body>`
 		this.javascriptCode = `import grad from 'gradient-from-image' 

 let url = "https://picsum.photos/600/600?image=199";

 grad.gr(url).then(gr=>{

	console.log(gr)
	/*
	expected output
	{
		vibrant:array_Of_Hex,
		relevent:array_Of_Hex,
		getTextClr:string_Of Hex
	}
	*/
	let bg = "linear-gradient(" +  gr.vibrant + ")";
	let el = document.querySelector(".example");
	el.style.background = bg;
 })`

 this.javascriptCode_text = `let url = "https://picsum.photos/600/600?image=199";

 grad.gr(url).then(gr=>{
 	// getTextClr() will return contrast text color from the Given Hex value based on the available colours from the image

 	// taking first color of the vibrant gradient
 	let textClr = gr.getTextClr(gr.vibrant[0]);
 	console.log(textClr);
 })`

 this.javascriptCode_solid = `grad.solid(url).then(solid=>{
 	// solid returns available color palattes from the given image  
 	// for documentation https://github.com/akfish/node-vibrant
 	console.log(solid);
 })`
	}
}


	
</script>

<style>

</style>