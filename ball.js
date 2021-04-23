AFRAME.registerComponent("ball",{
    init: function(){
        this.shoot()
    },
    shoot: function(){
        var turn = 10;
        window.addEventListener("keydown",(e)=>{
            if(e.key === "z" && turn!==0){
                var ball = document.createElement("a-entity");
                ball.setAttribute("gltf-model","./assets/ball/scene.gltf")
                var cam = document.querySelector("#camera")
                var pos = cam.getAttribute("position")
                ball.setAttribute("position",
                {
                    x:pos.x,
                    y: 1.5,
                    z: pos.z
                });
                ball.setAttribute("scale",{x:3.5,y:3.5,z:3.5})
                var camera = document.querySelector("#camera").object3D;
                var direction = new THREE.Vector3();
                camera.getWorldDirection(direction);

                ball.setAttribute("velocity",direction.multiplyScalar(-10));
                ball.setAttribute("velocity",{y:0})
                turn-=1
                var scene = document.querySelector("#scene")
                scene.appendChild(ball)
            }
        })
    }
})