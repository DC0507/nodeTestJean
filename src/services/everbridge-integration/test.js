var buffer = Buffer.from(`
              function isPointInPolygon(point, polygon) {
                  let isInside = false;
                  const x = point.lat, y = point.lng;
                  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
                      const xi = polygon[i].lat, yi = polygon[i].lng;
                      const xj = polygon[j].lat, yj = polygon[j].lng;

                      const intersect = ((yi > y) !== (yj > y))
                          && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
                      if (intersect) isInside = !isInside;
                  }
                  return isInside;
              }
              const laVenturaOrangePolygon = [
                { lat: 34.2869797, lng: -119.36638 },   // Converted coordinate
                { lat: 33.3580616, lng: -117.5976563 }, // Converted coordinate
                { lat: 33.7106323, lng: -117.1252441 }, // Converted coordinate
                { lat: 34.1663634, lng: -117.1252441 }, // Converted coordinate
                { lat: 34.1757105, lng: -118.0068219 }, // Converted coordinate
                { lat: 34.4819125, lng: -118.5588849 }, // Converted coordinate
                { lat: 34.2869797, lng: -119.36638 }  
              ];

              if(action.location?.country === 'US') {
                if(isPointInPolygon({lat: action.latitude, lng: action.longitude}, laVenturaOrangePolygon)) {
                  event.info[0].parameter.push({
                        valueName: "zone",
                        value: "E",
                        });
                }  
                if(['Iowa', 'Illinois', 'Indiana', 'Kansas', 'Kentucky', 'Michigan', 'Missouri', 'Minnesota', 'Ohio', 'Wisconsin'].includes(action.location?.province) || action.location?.country === 'Puerto Rico') {
                  event.info[0].parameter.push({
                        valueName: "zone",
                        value: "J",
                        });
                }
                if(['Alabama', 'Florida', 'Georgia', 'Louisiana', 'Mississippi'].includes(action.location?.province) || action.location?.country === 'Puerto Rico') {
                  event.info[0].parameter.push({
                        valueName: "zone",
                        value: "I",
                        });
                }
                if(['Connecticut', 'Delaware', 'Maryland', 'New Jersey'].includes(action.location?.province)) {
                  event.info[0].parameter.push({
                        valueName: "zone",
                        value: "H",
                        });
                }
                if(['DC', 'North Carolina', 'South Carolina', 'Tennessee', 'Virginia', 'West Virginia'].includes(action.location?.province)) {
                  event.info[0].parameter.push({
                        valueName: "zone",
                        value: "G",
                        });
                }
                if(['California'].includes(action.location?.province)) {
                  event.info[0].parameter.push({
                        valueName: "zone",
                        value: "F",
                        });
                }
                if(['Massachusetts', 'Pennsylvania', 'Rhode Island'].includes(action.location?.province)) {
                  event.info[0].parameter.push({
                        valueName: "zone",
                        value: "D",
                        });
                }
                if(['New York', 'Maine', 'New Hampshire', 'Vermont'].includes(action.location?.province)) {
                  event.info[0].parameter.push({
                        valueName: "zone",
                        value: "C",
                        });
                }
                if(['Alaska', 'Arizona', 'Colorado', 'Hawaii', 'Idaho', 'Montana', 'North Dakota', 'Nebraska', 'Nevada', 'Oregon', 'South Dakota', 'Utah', 'Washington', 'Wyoming'].includes(action.location?.province)) {
                  event.info[0].parameter.push({
                        valueName: "zone",
                        value: "B",
                        });
                }
                if(['Arkansas', 'New Mexico', 'Oklahoma', 'Texas'].includes(action.location?.province)) {
                  event.info[0].parameter.push({
                        valueName: "zone",
                        value: "A",
                        });
                }
              }
`);
console.log(buffer.toString('base64'));

const test = Buffer.from(
  'CiAgICAgICAgICAgICAgZnVuY3Rpb24gaXNQb2ludEluUG9seWdvbihwb2ludCwgcG9seWdvbikgewogICAgICAgICAgICAgICAgICBsZXQgaXNJbnNpZGUgPSBmYWxzZTsKICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IHBvaW50LmxhdCwgeSA9IHBvaW50LmxuZzsKICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSBwb2x5Z29uLmxlbmd0aCAtIDE7IGkgPCBwb2x5Z29uLmxlbmd0aDsgaiA9IGkrKykgewogICAgICAgICAgICAgICAgICAgICAgY29uc3QgeGkgPSBwb2x5Z29uW2ldLmxhdCwgeWkgPSBwb2x5Z29uW2ldLmxuZzsKICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHhqID0gcG9seWdvbltqXS5sYXQsIHlqID0gcG9seWdvbltqXS5sbmc7CgogICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0ID0gKCh5aSA+IHkpICE9PSAoeWogPiB5KSkKICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoeCA8ICh4aiAtIHhpKSAqICh5IC0geWkpIC8gKHlqIC0geWkpICsgeGkpOwogICAgICAgICAgICAgICAgICAgICAgaWYgKGludGVyc2VjdCkgaXNJbnNpZGUgPSAhaXNJbnNpZGU7CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzSW5zaWRlOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgICBjb25zdCBsYVZlbnR1cmFPcmFuZ2VQb2x5Z29uID0gWwogICAgICAgICAgICAgICAgeyBsYXQ6IDM0LjI4Njk3OTcsIGxuZzogLTExOS4zNjYzOCB9LCAgIC8vIENvbnZlcnRlZCBjb29yZGluYXRlCiAgICAgICAgICAgICAgICB7IGxhdDogMzMuMzU4MDYxNiwgbG5nOiAtMTE3LjU5NzY1NjMgfSwgLy8gQ29udmVydGVkIGNvb3JkaW5hdGUKICAgICAgICAgICAgICAgIHsgbGF0OiAzMy43MTA2MzIzLCBsbmc6IC0xMTcuMTI1MjQ0MSB9LCAvLyBDb252ZXJ0ZWQgY29vcmRpbmF0ZQogICAgICAgICAgICAgICAgeyBsYXQ6IDM0LjE2NjM2MzQsIGxuZzogLTExNy4xMjUyNDQxIH0sIC8vIENvbnZlcnRlZCBjb29yZGluYXRlCiAgICAgICAgICAgICAgICB7IGxhdDogMzQuMTc1NzEwNSwgbG5nOiAtMTE4LjAwNjgyMTkgfSwgLy8gQ29udmVydGVkIGNvb3JkaW5hdGUKICAgICAgICAgICAgICAgIHsgbGF0OiAzNC40ODE5MTI1LCBsbmc6IC0xMTguNTU4ODg0OSB9LCAvLyBDb252ZXJ0ZWQgY29vcmRpbmF0ZQogICAgICAgICAgICAgICAgeyBsYXQ6IDM0LjI4Njk3OTcsIGxuZzogLTExOS4zNjYzOCB9ICAKICAgICAgICAgICAgICBdOwoKICAgICAgICAgICAgICBpZihhY3Rpb24ubG9jYXRpb24/LmNvdW50cnkgPT09ICdVUycpIHsKICAgICAgICAgICAgICAgIGlmKGlzUG9pbnRJblBvbHlnb24oe2xhdDogYWN0aW9uLmxhdGl0dWRlLCBsbmc6IGFjdGlvbi5sb25naXR1ZGV9LCBsYVZlbnR1cmFPcmFuZ2VQb2x5Z29uKSkgewogICAgICAgICAgICAgICAgICBldmVudC5pbmZvWzBdLnBhcmFtZXRlci5wdXNoKHsKICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVOYW1lOiAiem9uZSIsCiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAiRSIsCiAgICAgICAgICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICAgICAgfSAgCiAgICAgICAgICAgICAgICBpZihbJ0lvd2EnLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdLYW5zYXMnLCAnS2VudHVja3knLCAnTWljaGlnYW4nLCAnTWlzc291cmknLCAnTWlubmVzb3RhJywgJ09oaW8nLCAnV2lzY29uc2luJ10uaW5jbHVkZXMoYWN0aW9uLmxvY2F0aW9uPy5wcm92aW5jZSkgfHwgYWN0aW9uLmxvY2F0aW9uPy5jb3VudHJ5ID09PSAnUHVlcnRvIFJpY28nKSB7CiAgICAgICAgICAgICAgICAgIGV2ZW50LmluZm9bMF0ucGFyYW1ldGVyLnB1c2goewogICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZU5hbWU6ICJ6b25lIiwKICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICJKIiwKICAgICAgICAgICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICBpZihbJ0FsYWJhbWEnLCAnRmxvcmlkYScsICdHZW9yZ2lhJywgJ0xvdWlzaWFuYScsICdNaXNzaXNzaXBwaSddLmluY2x1ZGVzKGFjdGlvbi5sb2NhdGlvbj8ucHJvdmluY2UpIHx8IGFjdGlvbi5sb2NhdGlvbj8uY291bnRyeSA9PT0gJ1B1ZXJ0byBSaWNvJykgewogICAgICAgICAgICAgICAgICBldmVudC5pbmZvWzBdLnBhcmFtZXRlci5wdXNoKHsKICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVOYW1lOiAiem9uZSIsCiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAiSSIsCiAgICAgICAgICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgaWYoWydDb25uZWN0aWN1dCcsICdEZWxhd2FyZScsICdNYXJ5bGFuZCcsICdOZXcgSmVyc2V5J10uaW5jbHVkZXMoYWN0aW9uLmxvY2F0aW9uPy5wcm92aW5jZSkpIHsKICAgICAgICAgICAgICAgICAgZXZlbnQuaW5mb1swXS5wYXJhbWV0ZXIucHVzaCh7CiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlTmFtZTogInpvbmUiLAogICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIkgiLAogICAgICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGlmKFsnREMnLCAnTm9ydGggQ2Fyb2xpbmEnLCAnU291dGggQ2Fyb2xpbmEnLCAnVGVubmVzc2VlJywgJ1ZpcmdpbmlhJywgJ1dlc3QgVmlyZ2luaWEnXS5pbmNsdWRlcyhhY3Rpb24ubG9jYXRpb24/LnByb3ZpbmNlKSkgewogICAgICAgICAgICAgICAgICBldmVudC5pbmZvWzBdLnBhcmFtZXRlci5wdXNoKHsKICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVOYW1lOiAiem9uZSIsCiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAiRyIsCiAgICAgICAgICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgaWYoWydDYWxpZm9ybmlhJ10uaW5jbHVkZXMoYWN0aW9uLmxvY2F0aW9uPy5wcm92aW5jZSkpIHsKICAgICAgICAgICAgICAgICAgZXZlbnQuaW5mb1swXS5wYXJhbWV0ZXIucHVzaCh7CiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlTmFtZTogInpvbmUiLAogICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIkYiLAogICAgICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGlmKFsnTWFzc2FjaHVzZXR0cycsICdQZW5uc3lsdmFuaWEnLCAnUmhvZGUgSXNsYW5kJ10uaW5jbHVkZXMoYWN0aW9uLmxvY2F0aW9uPy5wcm92aW5jZSkpIHsKICAgICAgICAgICAgICAgICAgZXZlbnQuaW5mb1swXS5wYXJhbWV0ZXIucHVzaCh7CiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlTmFtZTogInpvbmUiLAogICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIkQiLAogICAgICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGlmKFsnTmV3IFlvcmsnLCAnTWFpbmUnLCAnTmV3IEhhbXBzaGlyZScsICdWZXJtb250J10uaW5jbHVkZXMoYWN0aW9uLmxvY2F0aW9uPy5wcm92aW5jZSkpIHsKICAgICAgICAgICAgICAgICAgZXZlbnQuaW5mb1swXS5wYXJhbWV0ZXIucHVzaCh7CiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlTmFtZTogInpvbmUiLAogICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIkMiLAogICAgICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGlmKFsnQWxhc2thJywgJ0FyaXpvbmEnLCAnQ29sb3JhZG8nLCAnSGF3YWlpJywgJ0lkYWhvJywgJ01vbnRhbmEnLCAnTm9ydGggRGFrb3RhJywgJ05lYnJhc2thJywgJ05ldmFkYScsICdPcmVnb24nLCAnU291dGggRGFrb3RhJywgJ1V0YWgnLCAnV2FzaGluZ3RvbicsICdXeW9taW5nJ10uaW5jbHVkZXMoYWN0aW9uLmxvY2F0aW9uPy5wcm92aW5jZSkpIHsKICAgICAgICAgICAgICAgICAgZXZlbnQuaW5mb1swXS5wYXJhbWV0ZXIucHVzaCh7CiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlTmFtZTogInpvbmUiLAogICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIkIiLAogICAgICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGlmKFsnQXJrYW5zYXMnLCAnTmV3IE1leGljbycsICdPa2xhaG9tYScsICdUZXhhcyddLmluY2x1ZGVzKGFjdGlvbi5sb2NhdGlvbj8ucHJvdmluY2UpKSB7CiAgICAgICAgICAgICAgICAgIGV2ZW50LmluZm9bMF0ucGFyYW1ldGVyLnB1c2goewogICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZU5hbWU6ICJ6b25lIiwKICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICJBIiwKICAgICAgICAgICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgfQoKCgo=',
  'base64',
);
console.log(Buffer.from(test).toString('ascii'));
