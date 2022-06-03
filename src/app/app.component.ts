import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'my-app',
  template: `
  THIS IS THE TOP OF THE PAGE
  THIS IS THE TOP OF THE PAGE
  <div class="wrapper">
        <div >
            <button kendoButton title="foo">
                Position top when no space is available
            </button>
        </div>
       <br>
    <div >
    <button kendoButton title="bar">
       Position top when space is available
    </button>
    <div >
            <button kendoButton title="foo">
                Position top when no space is available
            </button>
        </div>
       <br>
    <div >
    <button kendoButton title="bar">
       Position top when space is available
    </button>
    </div>
    <div >
            <button kendoButton title="foo">
                Position top when no space is available
            </button>
        </div>
       <br>
    <div >
    <button kendoButton title="bar">
       Position top when space is available
    </button>
    </div>
    <div >
            <button kendoButton title="foo">
                Position top when no space is available
            </button>
        </div>
       <br>
    <div >
    <button kendoButton title="bar">
       Position top when space is available
    </button>
    </div>
    <div >
            <button kendoButton title="foo">
                Position top when no space is available
            </button>
        </div>
       <br>
    <div kendoTooltip [closable]="true" class="right" position="top">
    <button kendoButton title="bar">
       CLICK ME!
    </button>
    </div>
    <div >
            <button kendoButton title="foo">
                Position top when no space is available
            </button>
        </div>
       <br>
    <div >
    <button kendoButton title="bar">
       Position top when space is available
    </button>
    </div>
    <div >
            <button kendoButton title="foo">
                Position top when no space is available
            </button>
        </div>
       <br>
    <div >
    <button kendoButton title="bar">
       Position top when space is available
    </button>
    </div>
    <div >
            <button kendoButton title="foo">
                Position top when no space is available
            </button>
        </div>
       <br>
    <div >
    <button kendoButton title="bar">
       Position top when space is available
    </button>
    </div>
    <div >
            <button kendoButton title="foo">
                Position top when no space is available
            </button>
        </div>
       <br>
    <div >
    <button kendoButton title="bar">
       Position top when space is available
    </button>
    </div>
    <div >
            <button kendoButton title="foo">
                Position top when no space is available
            </button>
        </div>
       <br>
    <div >
    <button kendoButton title="bar">
       Position top when space is available
    </button>
    </div>
    </div>
  </div>
    `,
  styles: [
    `
        .wrapper {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        .wrapper div {
            flex-basis: 50%;
            text-align: center;
            margin-bottom: 50px;
        }
        button {
            padding: 10px 50px;
        }
        .wrapper .top,
        .wrapper .bottom {
            margin-bottom: 0;
        }
    `,
  ],
})
export class AppComponent {}
