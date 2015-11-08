# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', auto_created=True, primary_key=True)),
                ('codigo', models.CharField(max_length=15)),
                ('nombre', models.TextField(null=True, blank=True)),
                ('activo', models.BooleanField(default=True)),
                ('fecha', models.DateTimeField(null=True, blank=True)),
            ],
            options={
                'verbose_name_plural': 'Categorias',
                'verbose_name': 'Categoria',
            },
        ),
    ]
