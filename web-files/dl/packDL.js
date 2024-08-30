let vList;
let vListSize;
fetch("https://iatj-modpack.github.io/meta.json", {
    method: "GET",
    headers: {
        Accept: "application/json",
    },
})
    .then((response) => response.json())
    .then((response) => {
        console.log("Fetched!")
        vList = response;
        vListSize = response.versions.length;
        for (var i = 0; i < vList.versions.length; i++) {
            if (document.location.pathname == "/dl/" + vList.versions[i].id) {
                console.log(vList.versions[i].id)
                document.location = vList.versions[i].mpfile
            }
        }
        if (document.location.pathname == "/dl/0.0.0") {
            document.location = "https://iatj-modpack.github.io/versions/0.0.0/iatj_modpack_file_0.0.0.mrpack"
        }
        if (document.location.pathname == "/dl/latest") {
            async function YES() {
                console.log(vList.versions[vListSize])
                var latestMPFile = await vList.versions[vListSize].mpfile;
                document.location = latestMPFile;
            }
            YES()
        }
    })

