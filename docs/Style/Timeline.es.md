## Cronología


La cronología es un conjunto de clases css que permite al usuario tener una vista cronológica, ya que la cronología ofrece una mejor estructura de las noticias relevantes o de mayor interés, como por ejemplo, las acciones realizadas a lo largo del día de cada empleado. Para mostrar una cronología correctamente, es necesario indicar un **<entry\>** y un **</body\>**.

![Timeline](/docs_assets/images/TimelineStyle/Timeline.png#only-light "Timeline"){data-gallery="light"}
![Timeline](/docs_assets/images/TimelineStyle/Timeline_dark.png#only-dark "Timeline"){data-gallery="dark"}

```html
<div class="timeline">
  <div class="entry">
    <div class="title">
      <h3 class="txt-outstanding"><b>2014 - Present</b></h3>
      <p>Title, Company</p>
    </div>
    <div class="body">
      <p>Voluptatibus veniam ea reprehenderit atque ...</p>
      <ul>
        <li>Rerum sit libero possimus amet excepturi</li>
        <li>Exercitationem enim dolores sunt ...</li>
        <li>Modi aut dolores dignissimos sequi sit ...</li>
      </ul>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3 class="txt-outstanding"><b>2010 - 2014</b></h3>
      <p>Title, Company</p>
      <div>
        <div class="body">
          <p>Voluptatibus veniam ea reprehenderit atque ...</p>
          <ul>
            <li>Rerum sit libero possimus amet excepturi</li>
            <li>Exercitationem enim dolores sunt ...</li>
            <li>Modi aut dolores dignissimos sequi sit ...</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Cronología en Tarjetas

La cronología de tarjetas es un conjunto de clases css que permite al usuario tener una vista cronológica responsiva, ya que la cronología ofrece una mejor estructura de las noticias relevantes o de mayor interés, como por ejemplo, acciones realizadas a lo largo del día de cada empleado.

![Card timeline](/docs_assets/images/TimelineStyle/CardTimeline.png#only-light "Card timeline"){data-gallery="light"}
![Card timeline](/docs_assets/images/TimelineStyle/CardTimeline_dark.png#only-dark "Card timeline"){data-gallery="dark"}

```html
<div class="appointment-timeline-group">7 June 2018</div>
  <div class="appointment-timeline">
    <div class="col-3 col-s-1 appointment-timeline-height">
      <div class="appointment-timeline-entry">
        <span class="hidden-s"><span class="txt-outstanding">11:14</span><b class="size-xs">5 hours ago</b></span>
        <i class="flx-icon icon-email-2 appointment-timeline-icon">7 June 2018</i>
      </div>
    </div>
    <div class="col-9 col-s-11">
      <div class="appointment-timeline-body ">
        <div class="col-2">
          <img class="img-responsive img-circle"> src="./Img/Avatars/Avatar_blank.png"> style="max-height:60px;"/>
        </div>
        <div class="col-10">
          <h4 class="txt-outstanding">Cristina Aguilera></h4>
          More text here
        </div>
      </div>
    </div>
</div>
```