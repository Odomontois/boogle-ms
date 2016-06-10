/**
  * Author: Oleg Nizhnik
  * Date  : 10.06.2016
  * Time  : 16:03
  */
package controllers
import play.api.mvc.{Action, Controller}

class Application extends Controller {

  def index = Action {Ok(views.html.Application.index("Ororor new pagge"))}

}
