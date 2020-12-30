const defaultUrl = "items.json";
export const apiClient = {
    fakeLoadItems: function (url = defaultUrl) {
        return {
            then: function (cb) {
                setTimeout(() => {
                    cb(JSON.parse(localStorage.people || "[]"));
                }, 1000);
            },
        };
    },
    loadItems: function (url = defaultUrl, callback) {
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                callback(myJson || []);
            });
    },
};
export default apiClient;
