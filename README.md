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