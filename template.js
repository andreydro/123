var tpl = "{{name}} is {{age}} years old";
var el = document.createElement("div");

function createTemplate(template) {
    function template(element, object) {
        var array = tpl.split(" ");
        array.forEach(i => {
            if (/{{.+}}/g.test(i)) {
                var template = i.match(/\w+/);
                array[array.indexOf(i)] = i.replace(
                    /{{.+?}}/g,
                    object[template]
                );
            }
        });
        element.innerHTML = array.join(" ");
    }
    return template;
}

var template = createTemplate(tpl);
template(el, { name: "Bob", age: 33 });
el.innerHTML;