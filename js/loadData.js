
const gallery = document.getElementById("gallery");
const projects = document.getElementById("recentProjects");

fetch('https://modular-closets.glitch.me/get_gallery').then(r => r.json()).then((data) => {
    data.forEach((obj) => {
        gallery.innerHTML +=
            '<div class="col-xl-4 col-md-6 mb-4" data-aos="fade-up"> \
			<div class="box14 position:relative"> \
				<img class="w-100 h-auto rounded-5 galleryImage" src="' + obj.image + '" alt=""> \
				<div class="box-content position-absolute  mw-90 mx-auto"> \
					<div class="box-content-text  mw-90 mx-auto"> \
						<h3 class="title">' + obj.title + '</h3> \
						<span class="post">' + obj.desc + '</span> \
					</div> \
				</div> \
			</div> \
		</div>';
    });
});

fetch('https://modular-closets.glitch.me/get_projects').then(r => r.json()).then((data) => {
    projects.style.height = "";
    data.forEach((obj) => {
        projects.innerHTML +=
            '<div class="col-lg-4 col-md-6 portfolio-item ' + obj.category + '" data-aos="fade-up"> \
			<div class="box14 position:relative"> \
				<img class="w-100 h-auto rounded-5 projectImage" src="' + obj.workPlace + '" alt=""> \
				<div class="box-content position-absolute  mw-90 mx-auto"> \
					<div class="box-content-text  mw-90 mx-auto"> \
						<h3 class="title">' + obj.title + '</h3> \
						<span class="post">' + obj.desc + '</span> \
					</div> \
				</div> \
			</div> \
		</div>';
    });

    var projectImgBlocks = document.getElementsByClassName('projectImage');
    var isService = true;
    setInterval(function () {
        for (let i = 0; i < projectImgBlocks.length; i++) {
            if (isService)
                newImg = data[i].work;
            else
                newImg = data[i].workPlace;
            projectImgBlocks[i].src = newImg;
        }
        isService = !isService;

    }, 3000);
});