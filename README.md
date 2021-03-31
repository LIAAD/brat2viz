# brat2viz

## Setup

It is recommended to run the project in a python virtual environment.

```
$ virtualenv venv
$ source venv/bin/activate
```

```
$ pip install -r requirements.txt
```

### BRAT2DRS

Change directory to *brat2drs*

```
$ python brat2drs.py
```

Creates drs representations, under *brat2viz/drs_files*, from the .ann files under *text_2_story_new*. 

### DRS2VIZ

Change directory to *drs2viz*
```
$ python app.py
```

Starts a flask server running the representations on http://localhost:5055/brat2viz

### Cite our paper

If you use or extend Brat2Viz, **please** cite our paper:

Evelin Amorim, Alexandre Ribeiro, Inês Cantante, Alípio Jorge, Brenda Santana, Sérgio Nunes, Purificação Silvano, António Leal and Ricardo Campos
Brat2Viz: a Tool and Pipeline for Visualizing Narratives from Annotated Texts
Text2Story@ECIR2021, CEUR. 


Link to the workshop: https://text2story21.inesctec.pt/
