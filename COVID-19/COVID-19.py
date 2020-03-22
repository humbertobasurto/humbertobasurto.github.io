# -*- coding: utf-8 -*-
"""
Created on Thu Mar 19 21:08:33 2020

@author: Humberto Basurto
"""

import numpy as np
import pandas as pd
from matplotlib import pyplot as plt

covidData=pd.read_csv('covid_19_data.csv')
covidLineList=pd.read_csv('COVID19_line_list_data.csv')
openCovidLineList=pd.read_csv('COVID19_open_line_list.csv')
covidConfirmed=pd.read_csv('time_series_covid_19_confirmed.csv')
covidDeath=pd.read_csv('time_series_covid_19_deaths.csv')
covidRecovered=pd.read_csv('time_series_covid_19_recovered.csv')

covidData.head()