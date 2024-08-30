let vList;
fetch("https://iatj-modpack.github.io/meta.json", {
    method: "GET",
    headers: {
        Accept: "application/json",
    },
})
    .then((response) => response.json())
    .then((response) => {
        console.log("Fetched!")
        var vList = response;
        var latestVersionJson = vList.versions[vList.versions.length].mpfile;
        if (document.location.pathname == "/dl/0.0.0") {
            document.location = "https://iatj-modpack.github.io/versions/0.0.0/iatj_modpack_file_0.0.0.mrpack"
        }
        else if (document.location.pathname == "/dl/latest") {
            document.location = latestVersionJson.mpfile
        }
        else {
            for (var i = 0; i < vList.versions.length; i++) {
                if (document.location.pathname == "/dl/" + vList.versions[i].id) {
                    console.log(vList.versions[i].id)
                    document.location = vList.versions[i].mpfile
                }
            }
        }
    })

