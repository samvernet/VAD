var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EnseignesNationales_1 = new ol.format.GeoJSON();
var features_EnseignesNationales_1 = format_EnseignesNationales_1.readFeatures(json_EnseignesNationales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnseignesNationales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnseignesNationales_1.addFeatures(features_EnseignesNationales_1);
var lyr_EnseignesNationales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnseignesNationales_1, 
                style: style_EnseignesNationales_1,
                popuplayertitle: "Enseignes Nationales",
                interactive: true,
    title: 'Enseignes Nationales<br />\
    <img src="styles/legend/EnseignesNationales_1_0.png" /> Locale<br />\
    <img src="styles/legend/EnseignesNationales_1_1.png" /> Nationale<br />'
        });
var format_EmplacementN1_2 = new ol.format.GeoJSON();
var features_EmplacementN1_2 = format_EmplacementN1_2.readFeatures(json_EmplacementN1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmplacementN1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmplacementN1_2.addFeatures(features_EmplacementN1_2);
var lyr_EmplacementN1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmplacementN1_2, 
                style: style_EmplacementN1_2,
                popuplayertitle: "Emplacement N°1",
                interactive: true,
                title: 'Emplacement N°1'
            });
var format_Locauxvacants_3 = new ol.format.GeoJSON();
var features_Locauxvacants_3 = format_Locauxvacants_3.readFeatures(json_Locauxvacants_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Locauxvacants_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locauxvacants_3.addFeatures(features_Locauxvacants_3);
var lyr_Locauxvacants_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Locauxvacants_3, 
                style: style_Locauxvacants_3,
                popuplayertitle: "Locaux vacants",
                interactive: true,
    title: 'Locaux vacants<br />\
    <img src="styles/legend/Locauxvacants_3_0.png" /> Locaux en travaux<br />\
    <img src="styles/legend/Locauxvacants_3_1.png" /> Locaux vacants<br />'
        });
var format_Notesdevantures_4 = new ol.format.GeoJSON();
var features_Notesdevantures_4 = format_Notesdevantures_4.readFeatures(json_Notesdevantures_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Notesdevantures_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Notesdevantures_4.addFeatures(features_Notesdevantures_4);
var lyr_Notesdevantures_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Notesdevantures_4, 
                style: style_Notesdevantures_4,
                popuplayertitle: "Notes devantures",
                interactive: true,
    title: 'Notes devantures<br />\
    <img src="styles/legend/Notesdevantures_4_0.png" /> 2 - 3<br />\
    <img src="styles/legend/Notesdevantures_4_1.png" /> 5 - 6<br />\
    <img src="styles/legend/Notesdevantures_4_2.png" /> 8 - 9<br />\
    <img src="styles/legend/Notesdevantures_4_3.png" /> 10 - 11<br />\
    <img src="styles/legend/Notesdevantures_4_4.png" /> 12 - 13<br />\
    <img src="styles/legend/Notesdevantures_4_5.png" /> 15 - 16<br />\
    <img src="styles/legend/Notesdevantures_4_6.png" /> 18 - 19<br />'
        });
var format_Catgoriesdactivits_5 = new ol.format.GeoJSON();
var features_Catgoriesdactivits_5 = format_Catgoriesdactivits_5.readFeatures(json_Catgoriesdactivits_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Catgoriesdactivits_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Catgoriesdactivits_5.addFeatures(features_Catgoriesdactivits_5);
var lyr_Catgoriesdactivits_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Catgoriesdactivits_5, 
                style: style_Catgoriesdactivits_5,
                popuplayertitle: "Catégories d'activités",
                interactive: true,
    title: 'Catégories d\'activités<br />\
    <img src="styles/legend/Catgoriesdactivits_5_0.png" /> Alimentaire<br />\
    <img src="styles/legend/Catgoriesdactivits_5_1.png" /> Culture loisirs santé<br />\
    <img src="styles/legend/Catgoriesdactivits_5_2.png" /> Equip. de la maison<br />\
    <img src="styles/legend/Catgoriesdactivits_5_3.png" /> Equip. de la personne<br />\
    <img src="styles/legend/Catgoriesdactivits_5_4.png" /> Grand commerce<br />\
    <img src="styles/legend/Catgoriesdactivits_5_5.png" /> Hôtellerie restauration<br />\
    <img src="styles/legend/Catgoriesdactivits_5_6.png" /> Services entreprises<br />\
    <img src="styles/legend/Catgoriesdactivits_5_7.png" /> Services non commerciaux<br />\
    <img src="styles/legend/Catgoriesdactivits_5_8.png" /> Services personnels<br />\
    <img src="styles/legend/Catgoriesdactivits_5_9.png" /> Véhicules<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_EnseignesNationales_1.setVisible(false);lyr_EmplacementN1_2.setVisible(false);lyr_Locauxvacants_3.setVisible(false);lyr_Notesdevantures_4.setVisible(false);lyr_Catgoriesdactivits_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EnseignesNationales_1,lyr_EmplacementN1_2,lyr_Locauxvacants_3,lyr_Notesdevantures_4,lyr_Catgoriesdactivits_5];
lyr_EnseignesNationales_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Ordre': 'Ordre', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Surface': 'Surface', 'Etablissem': 'Etablissem', 'EN': 'EN', 'Note 2024': 'Note 2024', 'Emp': 'Emp', 'VILLE': 'VILLE', 'CODE POSTAL': 'CODE POSTAL', 'IDENTIFICATION': 'IDENTIFICATION', 'surface qgis': 'surface qgis', 'Catégorie 2024': 'Catégorie 2024', 'Mise à jour 2024': 'Mise à jour 2024', });
lyr_EmplacementN1_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Ordre': 'Ordre', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Surface': 'Surface', 'Etablissem': 'Etablissem', 'EN': 'EN', 'Note 2024': 'Note 2024', 'Emp': 'Emp', 'VILLE': 'VILLE', 'CODE POSTAL': 'CODE POSTAL', 'IDENTIFICATION': 'IDENTIFICATION', 'surface qgis': 'surface qgis', 'Catégorie 2024': 'Catégorie 2024', 'Mise à jour 2024': 'Mise à jour 2024', });
lyr_Locauxvacants_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Ordre': 'Ordre', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Surface': 'Surface', 'Etablissem': 'Etablissem', 'EN': 'EN', 'Note 2024': 'Note 2024', 'Emp': 'Emp', 'VILLE': 'VILLE', 'CODE POSTAL': 'CODE POSTAL', 'IDENTIFICATION': 'IDENTIFICATION', 'surface qgis': 'surface qgis', 'Catégorie 2024': 'Catégorie 2024', 'Mise à jour 2024': 'Mise à jour 2024', });
lyr_Notesdevantures_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Ordre': 'Ordre', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Surface': 'Surface', 'Etablissem': 'Etablissem', 'EN': 'EN', 'Note 2024': 'Note 2024', 'Emp': 'Emp', 'VILLE': 'VILLE', 'CODE POSTAL': 'CODE POSTAL', 'IDENTIFICATION': 'IDENTIFICATION', 'surface qgis': 'surface qgis', 'Catégorie 2024': 'Catégorie 2024', 'Mise à jour 2024': 'Mise à jour 2024', });
lyr_Catgoriesdactivits_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Ordre': 'Ordre', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Surface': 'Surface', 'Etablissem': 'Etablissem', 'EN': 'EN', 'Note 2024': 'Note 2024', 'Emp': 'Emp', 'VILLE': 'VILLE', 'CODE POSTAL': 'CODE POSTAL', 'IDENTIFICATION': 'IDENTIFICATION', 'surface qgis': 'surface qgis', 'Catégorie 2024': 'Catégorie 2024', 'Mise à jour 2024': 'Mise à jour 2024', });
lyr_EnseignesNationales_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Ordre': 'Range', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Surface': 'Range', 'Etablissem': 'TextEdit', 'EN': 'TextEdit', 'Note 2024': 'Range', 'Emp': 'TextEdit', 'VILLE': 'TextEdit', 'CODE POSTAL': 'Range', 'IDENTIFICATION': 'TextEdit', 'surface qgis': 'Range', 'Catégorie 2024': 'TextEdit', 'Mise à jour 2024': '', });
lyr_EmplacementN1_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Ordre': 'Range', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Surface': 'Range', 'Etablissem': 'TextEdit', 'EN': 'TextEdit', 'Note 2024': 'Range', 'Emp': 'TextEdit', 'VILLE': 'TextEdit', 'CODE POSTAL': 'Range', 'IDENTIFICATION': 'TextEdit', 'surface qgis': 'Range', 'Catégorie 2024': 'TextEdit', 'Mise à jour 2024': '', });
lyr_Locauxvacants_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Ordre': 'Range', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Surface': 'Range', 'Etablissem': 'TextEdit', 'EN': 'TextEdit', 'Note 2024': 'Range', 'Emp': 'TextEdit', 'VILLE': 'TextEdit', 'CODE POSTAL': 'Range', 'IDENTIFICATION': 'TextEdit', 'surface qgis': 'Range', 'Catégorie 2024': 'TextEdit', 'Mise à jour 2024': '', });
lyr_Notesdevantures_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Ordre': 'Range', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Surface': 'Range', 'Etablissem': 'TextEdit', 'EN': 'TextEdit', 'Note 2024': 'Range', 'Emp': 'TextEdit', 'VILLE': 'TextEdit', 'CODE POSTAL': 'Range', 'IDENTIFICATION': 'TextEdit', 'surface qgis': 'Range', 'Catégorie 2024': 'TextEdit', 'Mise à jour 2024': '', });
lyr_Catgoriesdactivits_5.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Ordre': 'Range', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Surface': 'Range', 'Etablissem': 'TextEdit', 'EN': 'TextEdit', 'Note 2024': 'Range', 'Emp': 'TextEdit', 'VILLE': 'TextEdit', 'CODE POSTAL': 'Range', 'IDENTIFICATION': 'TextEdit', 'surface qgis': 'Range', 'Catégorie 2024': 'TextEdit', 'Mise à jour 2024': 'TextEdit', });
lyr_EnseignesNationales_1.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Numero': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Surface': 'hidden field', 'Etablissem': 'inline label - always visible', 'EN': 'inline label - always visible', 'Note 2024': 'inline label - always visible', 'Emp': 'inline label - always visible', 'VILLE': 'inline label - always visible', 'CODE POSTAL': 'inline label - always visible', 'IDENTIFICATION': 'hidden field', 'surface qgis': 'inline label - always visible', 'Catégorie 2024': 'inline label - always visible', 'Mise à jour 2024': 'no label', });
lyr_EmplacementN1_2.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Numero': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Surface': 'hidden field', 'Etablissem': 'inline label - always visible', 'EN': 'inline label - always visible', 'Note 2024': 'inline label - always visible', 'Emp': 'inline label - always visible', 'VILLE': 'inline label - always visible', 'CODE POSTAL': 'inline label - always visible', 'IDENTIFICATION': 'hidden field', 'surface qgis': 'inline label - always visible', 'Catégorie 2024': 'inline label - always visible', 'Mise à jour 2024': 'no label', });
lyr_Locauxvacants_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Numero': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Surface': 'hidden field', 'Etablissem': 'inline label - always visible', 'EN': 'inline label - always visible', 'Note 2024': 'inline label - always visible', 'Emp': 'inline label - always visible', 'VILLE': 'inline label - always visible', 'CODE POSTAL': 'inline label - always visible', 'IDENTIFICATION': 'hidden field', 'surface qgis': 'inline label - always visible', 'Catégorie 2024': 'inline label - always visible', 'Mise à jour 2024': 'no label', });
lyr_Notesdevantures_4.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Numero': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Surface': 'hidden field', 'Etablissem': 'inline label - always visible', 'EN': 'inline label - always visible', 'Note 2024': 'inline label - always visible', 'Emp': 'inline label - always visible', 'VILLE': 'inline label - always visible', 'CODE POSTAL': 'inline label - always visible', 'IDENTIFICATION': 'hidden field', 'surface qgis': 'inline label - always visible', 'Catégorie 2024': 'inline label - always visible', 'Mise à jour 2024': 'no label', });
lyr_Catgoriesdactivits_5.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Numero': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Surface': 'hidden field', 'Etablissem': 'inline label - always visible', 'EN': 'inline label - always visible', 'Note 2024': 'inline label - always visible', 'Emp': 'inline label - always visible', 'VILLE': 'inline label - always visible', 'CODE POSTAL': 'inline label - always visible', 'IDENTIFICATION': 'hidden field', 'surface qgis': 'inline label - always visible', 'Catégorie 2024': 'inline label - always visible', 'Mise à jour 2024': 'no label', });
lyr_Catgoriesdactivits_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});